using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Org.BouncyCastle;
using Org.BouncyCastle.X509;

namespace Overovac.Verification.XmlSignatureNS
{
    public class OtherElements
    {
        public OtherElements(XmlDocument xmlDoc, XmlNode signatureNode, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            Nsmgr = mngr;
            SignedInfo = null;
            SignatureValue = null;
            SignatureNode = signatureNode;
                //XmlDoc.GetElementsByTagName("ds:Signature").Count == 0 ? null : XmlDoc.GetElementsByTagName("ds:Signature").Item(0);
            NoError = true;
        }

        private XmlDocument XmlDoc { get; set; }
        private XmlNamespaceManager Nsmgr { get; set; }
        XmlNode SignedInfo { get; set; }
        XmlNode SignatureValue { get; set; }
        XmlNode SignatureNode { get; set; }
        string SignatureID { get; set; }
        private bool NoError { get; set; }

        public bool Validate() {
            ExistSignatureAtributes();
            CheckSignatureValueID();
            ExistSignedInfoAtributes();
            CountSignedInfoReferencies();
            CheckKeyInfoContent();
            CheckSignaturePropertiesContent();
            OverManifestTransformDigest();
            return true;
        }

        private void ExistSignatureAtributes()
        {   
            if (SignatureNode == null)
                throw new Exception("chyba SignatureNode");
            else
            {
                if (SignatureNode.Attributes.GetNamedItem("Id") == null)
                    throw new Exception("chyba signature Id");

                if(string.IsNullOrEmpty(SignatureNode.Attributes.GetNamedItem("Id").Value))
                    throw new Exception("chyba hodnota signature Id");

                if (SignatureNode.Attributes.GetNamedItem("xmlns:ds") == null && string.IsNullOrEmpty(SignatureNode.Attributes.GetNamedItem("xmlns:ds").Value))
                    throw new Exception("chyba signature atributov xmlns:ds a xmlns:ds");

            }
            //SET SIGNATURE ID
            SignatureID = SignatureNode.Attributes.GetNamedItem("Id").Value;

            if (!NoError)
                throw new Exception("chyba atributov ExistSignatureAtributes");

        }


        private void CheckSignatureValueID()
        {
            // signatureValue
            if (SignatureNode.SelectSingleNode("ds:SignatureValue", Nsmgr) == null)
                NoError = false;
            else
            {
                SignatureValue = SignatureNode.SelectSingleNode("ds:SignatureValue", Nsmgr);
                if (SignatureValue.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(SignatureValue.Attributes.GetNamedItem("Id").Value))
                    NoError = false;
            }

            if (!NoError)
                throw new Exception("chyba CheckSignatureValueID");

        }


        private void ExistSignedInfoAtributes()
        {
            if (SignatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", Nsmgr) == null)
                NoError = false;
            else
                SignedInfo = SignatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", Nsmgr);
            if (SignedInfo == null)
                NoError = false;
            if (!NoError)
                throw new Exception("chyba ExistSignedInfoAtributes");
        }


        private void CountSignedInfoReferencies()
        {
            int reference = 0;
            //ds:KeyInfo 
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeKeyinfo + "']", Nsmgr).Count == 0
                        &&
                       SignedInfo.SelectNodes("ds:Reference[@Id='" + StaticListOtherElements.GetReferenceTypeKeyinfoID(SignatureID) + "']", Nsmgr).Count == 0
                       ? false : true;
            reference += SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeKeyinfo + "']", Nsmgr).Count;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-KeyInfo");


            //ds:SignatureProperties
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeDsSignatureProperties + "']", Nsmgr).Count == 0
                        &&
                       SignedInfo.SelectNodes("ds:Reference[@Id='" + StaticListOtherElements.GetReferenceTypeDsSignaturePropertiesID(SignatureID) + "']", Nsmgr).Count == 0
                       ? false : true;
            reference += SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeDsSignatureProperties + "']", Nsmgr).Count;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-ds:SignatureProperties");

            //xades:SignatureProperties
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeXadesSignatureProperties + "']", Nsmgr).Count == 0
                        &&
                       SignedInfo.SelectNodes("ds:Reference[@Id='" + StaticListOtherElements.GetReferenceTypeXadesSignaturePropertiesID(SignatureID) + "']", Nsmgr).Count == 0
                       ? false : true;
            reference += SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeXadesSignatureProperties + "']", Nsmgr).Count;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-xades:SignatureProperties");

            //manifest
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeManifet + "']", Nsmgr).Count == 0 ? false : true;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-manifest");

            var manifests = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeManifet + "']", Nsmgr);
            for (int i = 0; i < manifests.Count; i++)
            {
                var manifestObject = XmlDoc.SelectSingleNode("//ds:Object//ds:Manifest[@Id='" + manifests[i].Attributes.GetNamedItem("URI").Value.Replace("#", string.Empty) + "'] ", Nsmgr);
                if (manifestObject == null)
                {
                    throw new Exception("Referencia Manifest neodkazuje na spravny ds:manifest");
                }

            }

            reference += manifests.Count;
            if (SignedInfo.SelectNodes("ds:Reference", Nsmgr).Count != reference)
                throw new Exception("chyba nezname Referencie v SignedInfo");

        }


        private void CheckKeyInfoContent()
        {
            var keyInfoNode = SignatureNode.SelectSingleNode("ds:KeyInfo", Nsmgr);

            if (keyInfoNode.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(keyInfoNode.Attributes.GetNamedItem("Id").Value))
                throw new Exception("chyba Id v ds:KeyInfo");

            var dsX509 = keyInfoNode.SelectSingleNode("ds:X509Data", Nsmgr);
            if (dsX509 != null)
            {
                if (dsX509.SelectSingleNode("ds:X509Certificate", Nsmgr) == null || dsX509.SelectSingleNode("ds:X509IssuerSerial", Nsmgr) == null || dsX509.SelectSingleNode("ds:X509SubjectName", Nsmgr) == null)
                    throw new Exception("chybajuce elementy X509Certificate, X509IssuerSerial, X509SubjectName v ds:KeyInfo");
                else { 
                    //dsX509.SelectSingleNode("ds:X509Certificate", Nsmgr).Value
                    byte[] signatureCertificate = Convert.FromBase64String(SignatureNode.SelectSingleNode(@"//ds:KeyInfo/ds:X509Data/ds:X509Certificate", Nsmgr).InnerText);
                    var certObj = Org.BouncyCastle.Asn1.X509.X509CertificateStructure.GetInstance(Org.BouncyCastle.Asn1.Asn1Object.FromByteArray(signatureCertificate));

                    var serialNumber = dsX509.SelectSingleNode("ds:X509IssuerSerial/ds:X509SerialNumber", Nsmgr).InnerXml;
                    if(certObj.SerialNumber.Value.ToString() != serialNumber)
                        throw new Exception("chyba v dsX509 serialNumbert - neobsahuje: " + serialNumber);

                    var subjectName = dsX509.SelectSingleNode("ds:X509SubjectName", Nsmgr).InnerXml;
                    if(certObj.Subject.ToString() != subjectName)
                        throw new Exception("chyba v dsX509 subjectName - neobsahuje: " + subjectName);        

                    var issuer = dsX509.SelectSingleNode("ds:X509IssuerSerial/ds:X509IssuerName", Nsmgr).InnerXml.Split(',').Select(s => s.Trim());
                    foreach (var item in certObj.Issuer.ToString().Split(','))
                    {
                        if (!issuer.Contains(item.Trim()))
                        {   
                            //throw new Exception("chyba v dsX509 issuerName - neobsahuje: " + item);
                        }
                    }
                    


                }

            }
            else
            {
                throw new Exception("chyba ds:X509Data v ds:KeyInfo");
            }

        }


        private void CheckSignaturePropertiesContent() 
        {

            var SignatureProperties = SignatureNode.SelectSingleNode("ds:Object/ds:SignatureProperties", Nsmgr);
            if (SignatureProperties.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(SignatureProperties.Attributes.GetNamedItem("Id").Value))
                throw new Exception("chyba Id v ds:SignatureProperties");
            

            var SignaturePropertiesElements = SignatureProperties.SelectNodes("ds:SignatureProperty", Nsmgr);
            if (SignaturePropertiesElements.Count != 2)
                throw new Exception("ds:SignatureProperties neobsahuje dva elementy SignatureProperty");

            for (int i = 0; i < SignaturePropertiesElements.Count; i++)
			{
                if (SignaturePropertiesElements.Item(i).Attributes.GetNamedItem("Target").Value.Replace("#", string.Empty) != SignatureID)
                    throw new Exception("ds:SignatureProperty nema spravny atribut Target");
			}
            

        }

        public void OverManifestTransformDigest()
        {
            NoError = false;

            
            XmlNodeList manifests = XmlDoc.SelectNodes("//" + Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Manifest", Nsmgr);
            foreach (XmlNode manNode in manifests)
            {
                if (manNode.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(manNode.Attributes.GetNamedItem("Id").Value))
                    throw new Exception("chyba Id v ds:manifest");
                
                if(manNode.SelectSingleNode("ds:Reference", Nsmgr).Attributes.GetNamedItem("Type").Value != "http://www.w3.org/2000/09/xmldsig#Object")
                    throw new Exception("chybny Type v ds:manifest");

                if(manNode.SelectNodes("ds:Reference", Nsmgr).Count != 1)
                    throw new Exception("viac ako jedna referencia na ds:object v ds:manifest");

                XmlNode transformNode = manNode.SelectSingleNode("ds:Reference/"+Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Transforms/" + Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Transform", Nsmgr);
                XmlNode digestMethNode = manNode.SelectSingleNode("ds:Reference/" + Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":DigestMethod", Nsmgr);

                XmlAttribute transformNode_alg = (XmlAttribute)transformNode.Attributes.GetNamedItem("Algorithm");
                XmlAttribute digestMethNode_alg = (XmlAttribute)digestMethNode.Attributes.GetNamedItem("Algorithm");

                if (transformNode_alg != null && digestMethNode_alg != null && transformNode_alg.Value != null && digestMethNode_alg.Value != null)
                {
                    if (transformNode_alg.Value.Equals(StaticListDominika.CAN_METH_ALG) && StaticListDominika.MOZNE_ALG_DIG_ODTLACKU.Contains(digestMethNode_alg.Value))
                        NoError = true;
                    else
                    {
                        NoError = false;
                        break;
                    }
                }
            }

            if (!NoError)
                throw new Exception("CHYBA: kontrola obsahu ds:Transforms a ds:DigestMethod vo všetkých referenciách v ds:SignedInfo - nepodporovany algoritmus podla XADES-ZEP");

        }


    }
}
