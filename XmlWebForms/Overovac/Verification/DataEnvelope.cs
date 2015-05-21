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
            NoError = true;
        }

        public bool Validate() {
            ExistRootElementAtributes();
            return NoError;
        }

        private XmlDocument XmlDoc { get; set; }
        private XmlNamespaceManager NSMngr { get; set; }
        private bool NoError { get; set; }
        
        private void ExistRootElementAtributes()
        {   
            if (XmlDoc.FirstChild.Attributes.Count < 2)
                NoError = false;
            if (XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:xzep") == null && XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:ds") == null)
                NoError = false;

            if (XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:xzep").Value != "http://www.ditec.sk/ep/signature_formats/xades_zep/v1.0" || XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:ds").Value != "http://www.w3.org/2000/09/xmldsig#")
                NoError = false;
            if (!NoError)
                throw new Exception("chyba atributov xmlns:xzep alebo xmlns:ds v DataEnvelope");
            
        }
    }
}
