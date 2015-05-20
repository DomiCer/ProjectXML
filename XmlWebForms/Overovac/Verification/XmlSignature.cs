using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;


namespace Overovac.Verification
{
    public class XmlSignature
    {
        public XmlSignature(XmlDocument xmlDoc) {
            XmlDoc = xmlDoc;
            NoError = true;
        }

        public bool Validate() {
            ExistSignatureAtributes();
            return NoError;
        }

        private XmlDocument XmlDoc { get; set; }
        private bool NoError { get; set; }

      

        private void ExistSignatureAtributes()
        {
            bool noError = true;
            XmlNode signedInfo = null;
            var signatureNode = XmlDoc.GetElementsByTagName("ds:Signature").Count == 0 ? null : XmlDoc.GetElementsByTagName("ds:Signature").Item(0);
            if (signatureNode == null)
                noError = false;
            else
            {
                if (signatureNode.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(signatureNode.Attributes.GetNamedItem("Id").Value))
                    noError = false;
                XmlNamespaceManager nsmgr = new XmlNamespaceManager(XmlDoc.NameTable);
                nsmgr.AddNamespace("ds", "http://www.w3.org/2000/09/xmldsig#");
                if (signatureNode.Attributes.GetNamedItem("xmlns:ds") == null && string.IsNullOrEmpty(signatureNode.Attributes.GetNamedItem("xmlns:ds").Value))
                    noError = false;

                if (signatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", nsmgr) == null)
                    noError = false;
                else
                    signedInfo = signatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", nsmgr);
                if (signedInfo == null)
                    noError = false;
               // else
               //     CheckAllSignedInfoAtributes(signedInfo);
               
            }

            if (!noError)
                NoError = noError;
        }

        private bool CheckAllSignedInfoAtributes(XmlNode signedInfo) {

            throw new NotImplementedException();
        }
    }
}
