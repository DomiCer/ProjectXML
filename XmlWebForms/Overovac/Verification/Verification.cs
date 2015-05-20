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
         public Verification(XmlDocument xmldoc) {
             XmlDoc = xmldoc;
             
             
        }
         public XmlDocument XmlDoc { get; set; }

         public List<string> Validate() 
         {
             var resultList = new List<string>();

             resultList.Add(new DataEnvelope(XmlDoc).Validate() ? "OK - DataEnvelope" : "FAIL - DataEnvelope");
             resultList.Add(new XmlSignature(XmlDoc).Validate() ? "OK - XMLSignature" : "FAIL - XMLSignature");


              return resultList;
         }




    }

    
    
}
