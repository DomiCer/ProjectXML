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
            XmlNamespaceManager nsmgr = new XmlNamespaceManager(XmlDoc.NameTable);
            nsmgr.AddNamespace("ds", "http://www.w3.org/2000/09/xmldsig#");
            signedInfo = null;
            signatureValue = null;
            signatureNode = null;
        }

        public bool Validate() {
            ExistSignatureAtributes();
            ExistSignedInfoAtributes();
            CheckSignedValueID();

            return NoError;
        }

        private XmlDocument XmlDoc { get; set; }
        private bool NoError { get; set; }
        private XmlNamespaceManager Nsmgr { get; set; }
        XmlNode signedInfo {get; set;}
        XmlNode signatureValue { get; set; }
        XmlNode signatureNode { get; set; }

        private void ExistSignatureAtributes()
        {
            bool noError = true;
           
            signatureNode = XmlDoc.GetElementsByTagName("ds:Signature").Count == 0 ? null : XmlDoc.GetElementsByTagName("ds:Signature").Item(0);
            if (signatureNode == null)
                NoError = false;
            else
            {
                if (signatureNode.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(signatureNode.Attributes.GetNamedItem("Id").Value))
                    NoError = false;
               
                if (signatureNode.Attributes.GetNamedItem("xmlns:ds") == null && string.IsNullOrEmpty(signatureNode.Attributes.GetNamedItem("xmlns:ds").Value))
                    NoError = false;
   
            }

        }

        private void ExistSignedInfoAtributes()
        {
            bool noError = true;
             if (signatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", Nsmgr) == null)
                    noError = false;
            else
              signedInfo = signatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", Nsmgr);
              if (signedInfo == null)
                  noError = false;
              if (!noError)
                  NoError = noError;
        }

        private void CheckSignedValueID() {
            // signatureValue
            if (signatureNode.SelectSingleNode("//ds:Signature//ds:SignatureValue", Nsmgr) == null)
                NoError = false;
            else
            {
                signatureValue = signatureNode.SelectSingleNode("//ds:Signature//ds:SignatureValue", Nsmgr);
                if (signatureValue.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(signatureValue.Attributes.GetNamedItem("Id").Value))
                    NoError = false;
            }
            
        }
    }
}
