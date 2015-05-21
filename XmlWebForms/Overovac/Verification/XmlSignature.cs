using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Overovac.Verification.XmlSignatureNS;

namespace Overovac.Verification
{
    public class XmlSignature
    {
        private XmlDocument XmlDoc { get; set; }
        private XmlNode SignatureNode { get; set; }
        private bool NoError { get; set; }
        private XmlNamespaceManager Nsmgr { get; set; }
        
        public XmlSignature(XmlDocument xmlDoc, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            Nsmgr = mngr;
            NoError = true;

            SignatureNode = XmlDoc.SelectSingleNode("//" + Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Signature", Nsmgr);
        }

        public bool Validate() {
            SigMethCanMeth(SignatureNode);
            TransformsDigestMeth(SignatureNode);
            NoError = new CoreValidation(XmlDoc,SignatureNode, Nsmgr).Validate();
            NoError = new OtherElements(XmlDoc,SignatureNode, Nsmgr).Validate();

            return NoError;
        }

        //kontrola obsahu ds:SignatureMethod a ds:CanonicalizationMethod 
        //musia obsahovať URI niektorého z podporovaných algoritmov pre dané elementy podľa profilu XAdES_ZEP
        //
        //1. SignatureMethod musi obs. atribut Algorithm, ktoreho hodnota bude URI - jedno z podporovanych podpisovych schem (dokument kapitola 4.5 - prva tabulka)
        //2. CanonicalizationMethod musi obs. Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315". Len toto jedno uri je povolene.
        public void  SigMethCanMeth(XmlNode signatureNode)
        {
            NoError = false;
            try
            {
                XmlNode signedInfoNode = signatureNode.SelectSingleNode(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":SignedInfo", Nsmgr);
            
                XmlNode signatureMethodNode = signedInfoNode.SelectSingleNode(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":SignatureMethod", Nsmgr);
                XmlNode canMethodNode = signedInfoNode.SelectSingleNode(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":CanonicalizationMethod", Nsmgr);

                XmlAttribute signatureMethodNode_alg = (XmlAttribute)signatureMethodNode.Attributes.GetNamedItem("Algorithm");
                XmlAttribute canMethodNode_alg = (XmlAttribute)canMethodNode.Attributes.GetNamedItem("Algorithm");

                if (signatureMethodNode_alg != null && canMethodNode_alg != null && signatureMethodNode_alg.Value != null && canMethodNode_alg.Value != null)
                {
                    if (canMethodNode_alg.Value.Equals(StaticListDominika.CAN_METH_ALG) && StaticListDominika.MOZNE_SIG_SCHEMAS.Contains(signatureMethodNode_alg.Value))
                        NoError = true;
                }
                if(!NoError)
                    throw new Exception("CHYBA: kontrola obsahu ds:SignatureMethod a ds:CanonicalizationMethod: nepodporovany algoritmus podla XADES-ZEP");
            }
            catch (Exception ex)
            {
                NoError = false;
                throw ex;
            }
        }

        //kontrola obsahu ds:Transforms a ds:DigestMethod vo všetkých referenciách v ds:SignedInfo 
        //musia obsahovať URI niektorého z podporovaných algoritmov podľa profilu XAdES_ZEP
        //
        //1. vytiahnut vsetky ds:Reference z ds:SignedInfo. Pre kazdu:
        //2. skontrolovat ds:Transforms/ds:Transform - musi obs. atribut Algorihtm, hodnota jedna z URI v tab. v kapitole 4.5
        //3. skontrolovat ds:DigestMethod - musi obs. atribut Algorihtm, hodnota jedna z URI v tab. v kapitole 4.5
        public void TransformsDigestMeth(XmlNode signatureNode)
        {
            XmlNode signedInfoNode = signatureNode.SelectSingleNode("//" + Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":SignedInfo", Nsmgr);
                
            XmlNodeList references = signedInfoNode.SelectNodes(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Reference", Nsmgr);
            foreach (XmlNode refNode in references)
            {
                XmlNode transformNode = refNode.SelectSingleNode(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Transforms/" + Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Transform", Nsmgr);
                XmlNode digestMethNode = refNode.SelectSingleNode(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":DigestMethod", Nsmgr);

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
