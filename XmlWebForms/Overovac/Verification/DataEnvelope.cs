using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Overovac.Verification
{
    public class DataEnvelope
    {

        public DataEnvelope(XmlDocument xmlDoc, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            NSMngr = mngr;
        }

        public bool Validate() {
            return ExistRootElementAtributes();
        }

        private XmlDocument XmlDoc { get; set; }
        private XmlNamespaceManager NSMngr { get; set; }
        private bool NoError { get; set; }
        
        private bool ExistRootElementAtributes()
        {
            
            if (XmlDoc.FirstChild.Attributes.Count < 2)
                NoError = false;
            if (XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:xzep") == null && XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:ds") == null)
                NoError = false;
            return NoError;
        }
    }
}
