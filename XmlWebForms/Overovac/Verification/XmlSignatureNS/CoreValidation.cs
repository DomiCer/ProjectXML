using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Overovac.Verification
{
    public class CoreValidation
    {
        public XmlDocument XmlDoc { get; set; }
        public XmlNamespaceManager NSMngr { get; set; }
        
        public CoreValidation(XmlDocument xmlDoc, XmlNode signatureNode, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            NSMngr = mngr;
            XmlNamespaceManager nsmgr = new XmlNamespaceManager(XmlDoc.NameTable);
            nsmgr.AddNamespace("ds", "http://www.w3.org/2000/09/xmldsig#");
         
        }

        public bool Validate() {
            //todo
            return true;
        }
    }
}
