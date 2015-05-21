using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Overovac.Verification
{
    public class Verification
    {
         public Verification(XmlDocument xmldoc, XmlNamespaceManager mngr) {
             XmlDoc = xmldoc;
             NSMngr = mngr;
             
        }

         public XmlDocument XmlDoc { get; set; }
         public XmlNamespaceManager NSMngr { get; set; }

         public List<string> Validate() 
         {
             var resultList = new List<string>();

             resultList.Add(new DataEnvelope(XmlDoc, NSMngr).Validate() ? "OK - DataEnvelope" : "FAIL - DataEnvelope");
             resultList.Add(new XmlSignature(XmlDoc, NSMngr).Validate() ? "OK - XMLSignature" : "FAIL - XMLSignature");
             //resultList.Add(new TimeStamp(XmlDoc, NSMngr).Validate() ? "OK - TimeStamp" : "FAIL - TimeStamp");
             //resultList.Add(new CertificateValidity(XmlDoc, NSMngr).Validate() ? "OK - CertificateValidity" : "FAIL - XMLSignature");


              return resultList;
         }




    }

    
    
}
