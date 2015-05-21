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

            SignatureNode = XmlDoc.SelectSingleNode(Nsmgr.LookupPrefix(Overovac.XADES_NAMESPACE) + ":Signature", Nsmgr);
        }

        public bool Validate() {
            NoError = new CoreValidation(XmlDoc,SignatureNode, Nsmgr).Validate();
            NoError = new OtherElements(XmlDoc,SignatureNode, Nsmgr).Validate();

            return NoError;
        }

        

        
    }
}
