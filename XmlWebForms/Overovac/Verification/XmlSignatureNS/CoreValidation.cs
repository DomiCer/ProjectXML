using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Security.Cryptography;
using System.Security.Cryptography.Xml;
using System.IO;
using Org.BouncyCastle;
using System.Runtime.Serialization.Formatters.Binary;

namespace Overovac.Verification
{
    public class CoreValidation
    {
        public XmlDocument XmlDoc { get; set; }
        public XmlNamespaceManager Nsmgr { get; set; }
        private XmlNode SignatureNode { get; set; }
        private bool NoError { get; set; }

        public CoreValidation(XmlDocument xmlDoc, XmlNode signatureNode, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            Nsmgr = mngr;
            SignatureNode = signatureNode;

            NoError = true;
        }

        // Core validation (podľa špecifikácie XML Signature)
        // overenie hodnoty podpisu ds:SignatureValue a referencií v ds:SignedInfo:
        //	Part1: dereferencovanie URI, kanonikalizácia referencovaných ds:Manifest elementov a overenie hodnôt odtlačkov ds:DigestValue,
        //	Part2: kanonikalizácia ds:SignedInfo a overenie hodnoty ds:SignatureValue pomocou pripojeného podpisového certifikátu v ds:KeyInfo, 

        public bool Validate() {
            Part1(SignatureNode);
            Part2(SignatureNode);
            return NoError;
        }
        
        //dereferencovanie URI, kanonikalizácia referencovaných ds:Manifest elementov a overenie hodnôt odtlačkov ds:DigestValue,
        private void Part1(XmlNode signatureNode)
        {
            string ns = Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE);
            XmlNode signedInfoNode = signatureNode.SelectSingleNode("//" + ns + ":SignedInfo", Nsmgr);

            XmlNodeList references = signedInfoNode.SelectNodes(ns + ":Reference", Nsmgr);
            foreach (XmlNode refNode in references)
            {
                //ziskanie ID z URI referencie - dereferencivanie uri
                XmlAttribute uriAttr = (XmlAttribute)refNode.Attributes.GetNamedItem("URI");
                string id = uriAttr.Value.Replace("#","");

                XmlNode digestMethNode = refNode.SelectSingleNode(ns + ":DigestMethod", Nsmgr);
                XmlAttribute digestMethNode_alg = (XmlAttribute)digestMethNode.Attributes.GetNamedItem("Algorithm");
                string alg = digestMethNode_alg.Value;
                XmlNode digestValNode = refNode.SelectSingleNode(ns + ":DigestValue", Nsmgr);
                string digestValue = digestValNode.InnerText;

                //ak ide o manifest -> kanonikalizacia a overenie odtlacku
                if (id.StartsWith("ManifestObject"))
                {
                   XmlNode manifestNode = XmlDoc.SelectSingleNode("//" + ns + ":Manifest[@Id='"+ id +"']",Nsmgr);
                   string s = manifestNode.OuterXml;

                   // The XmlDsigC14NTransform will strip the UTF8 BOM
                   using (MemoryStream msIn = new MemoryStream(Encoding.UTF8.GetBytes(s)))
                   {
                       XmlDsigC14NTransform t = new XmlDsigC14NTransform(true);
                       t.LoadInput(msIn);

                       HashAlgorithm hash = null;
                       switch (alg)
                       {
                            case "http://www.w3.org/2000/09/xmldsig#sha1":
                               hash = new System.Security.Cryptography.SHA1Managed();
                               break;
                            case "http://www.w3.org/2001/04/xmldsig-more#sha224":
                               //hash = new System.Security.Cryptography.SH();
                               break;
                            case "http://www.w3.org/2001/04/xmlenc#sha256":
                               hash = new System.Security.Cryptography.SHA256Managed();
                               break;
                            case "http://www.w3.org/2001/04/xmldsig-more#sha384":
                               hash = new System.Security.Cryptography.SHA384Managed();
                               break;
                            case "http://www.w3.org/2001/04/xmlenc#sha512":
                               hash = new System.Security.Cryptography.SHA512Managed();
                               break;
                       }
                       
                       
                           byte[] digest = t.GetDigestedOutput(hash);
                           //string result = BitConverter.ToString(digest).Replace("-", String.Empty);
                           string result = Convert.ToBase64String(digest);
                           if (result.Equals(digestValue))
                               NoError = true;
                           else
                           {
                               NoError = false;
                               break;
                           }
                       
                   }
                }
            }

            if (!NoError)
                throw new Exception("CHYBA: Core validation: nezhodna hodnota odtlačkov ds:DigestValue");
            
        }

        //kanonikalizácia ds:SignedInfo a overenie hodnoty ds:SignatureValue pomocou pripojeného podpisového certifikátu v ds:KeyInfo, 
        private void Part2(XmlNode signatureNode)
        {
            NoError = false;
            string ns = Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE);
            XmlNodeList signedInfoNodeList = signatureNode.SelectNodes("//" + ns + ":SignedInfo", Nsmgr);
            XmlNode signedInfoNode = signatureNode.SelectSingleNode("//" + ns + ":SignedInfo", Nsmgr);
            
            byte[] signatureCertificate = Convert.FromBase64String(signatureNode.SelectSingleNode(@"//ds:KeyInfo/ds:X509Data/ds:X509Certificate", Nsmgr).InnerText);
            byte[] signature = Convert.FromBase64String(signatureNode.SelectSingleNode(@"//ds:SignatureValue", Nsmgr).InnerText);
           
            XmlDsigC14NTransform t = new XmlDsigC14NTransform(false);
            XmlDocument pom = new XmlDocument();
            pom.LoadXml(signedInfoNode.OuterXml);
            t.LoadInput(pom);
            byte[] data = ((MemoryStream)t.GetOutput()).ToArray();

            string signedInfoTransformAlg = signedInfoNode.SelectSingleNode("ds:CanonicalizationMethod", Nsmgr).Attributes.GetNamedItem("Algorithm").Value;
            string signedInfoSignatureAlg = signedInfoNode.SelectSingleNode("ds:SignatureMethod", Nsmgr).Attributes.GetNamedItem("Algorithm").Value;

            Org.BouncyCastle.Asn1.X509.SubjectPublicKeyInfo ski = Org.BouncyCastle.Asn1.X509.X509CertificateStructure.GetInstance(Org.BouncyCastle.Asn1.Asn1Object.FromByteArray(signatureCertificate)).SubjectPublicKeyInfo;
            Org.BouncyCastle.Crypto.AsymmetricKeyParameter pk = Org.BouncyCastle.Security.PublicKeyFactory.CreateKey(ski);

            string algStr = ""; //signature alg

            //find digest
            switch (signedInfoSignatureAlg)
            {
                case "http://www.w3.org/2000/09/xmldsig#rsa-sha1":
                    algStr = "sha1";
                    break;
                case "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256":
                    algStr = "sha256";
                    break;
                case "http://www.w3.org/2001/04/xmldsig-more#rsa-sha384":
                    algStr = "sha384";
                    break;
                case "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512":
                    algStr = "sha512";
                    break;
            }

            //find encryption
            switch (ski.AlgorithmID.ObjectID.Id)
            {
                case "1.2.840.10040.4.1": //dsa
                    algStr += "withdsa";
                    break;
                case "1.2.840.113549.1.1.1": //rsa
                    algStr += "withrsa";
                    break;
                default:
                    throw new Exception("verifySign 5: Unknown key algId = " + ski.AlgorithmID.ObjectID.Id);
                    
            }

            Org.BouncyCastle.Crypto.ISigner verif = Org.BouncyCastle.Security.SignerUtilities.GetSigner(algStr);
            verif.Init(false, pk);
            verif.BlockUpdate(data, 0, data.Length);
            NoError = verif.VerifySignature(signature);

            
            if (!NoError)
                throw new Exception("CHYBA: Core validation: neplatny odtlacok ds:SignatureValue");
        }

        private byte[] ObjectToByteArray(Object obj)
        {
            if (obj == null)
                return null;
            BinaryFormatter bf = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream())
            {
                bf.Serialize(ms, obj);
                return ms.ToArray();
            }
        }
    }
}
