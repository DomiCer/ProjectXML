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

        public DataEnvelope(XmlDocument xmlDoc)
        {
            XmlDoc = xmlDoc;
        }

        public bool Validate() {
            return ExistRootElementAtributes();
        }

        private XmlDocument XmlDoc { get; set; }
        private bool NoError { get; set; }

        private bool ExistRootElementAtributes()
        {
            bool noError = true;
            if (XmlDoc.FirstChild.Attributes.Count < 2)
                noError = false;
            if (XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:xzep") == null && XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:ds") == null)
                noError = false;
            return noError;
        }
    }
}
