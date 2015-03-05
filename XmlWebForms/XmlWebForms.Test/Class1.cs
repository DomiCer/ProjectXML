using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using System.Xml.Schema;
using System.Xml.Linq;
using XmlWebForms.Models;
using System.Xml;
using System.Xml.Serialization;
using System.IO;

namespace XmlWebForms.Test
{
    [TestFixture]
    public class XMLValidator
    {
        [Test]
        public void ValidateXML() {
            XmlSchemaSet schemas = new XmlSchemaSet();
            schemas.Add("", @"C:\D\Skola\STUBA\2roc\Letny\SISS\Project\ProjectXML\Resources\dotacie.xsd");

            Console.WriteLine("Attempting to validate");
            XDocument custOrdDoc =  CreateXML(GetGrant());     //XDocument.Load("CustomersOrders.xml");
            bool errors = false;
            custOrdDoc.Validate(schemas, (o, e) =>
            {
                Console.WriteLine("{0}", e.Message);
                errors = true;
            });
            Console.WriteLine("custOrdDoc {0}", errors ? "did not validate" : "validated");

            Assert.IsFalse(errors);
            
        }

        public XDocument CreateXML(Object YourClassObject)
        {
            XDocument xmlDoc = new XDocument();   //Represents an XML document, 
            // Initializes a new instance of the XmlDocument class.          
            XmlSerializer xmlSerializer = new XmlSerializer(YourClassObject.GetType());
            // Creates a stream whose backing store is memory. 
            using (MemoryStream xmlStream = new MemoryStream())
            {
                xmlSerializer.Serialize(xmlStream, YourClassObject);
                xmlStream.Position = 0;
                //Loads the XML document from the specified string.
                xmlDoc = XDocument.Load(xmlStream);
                return xmlDoc;
            }
        }

        public dotacia GetGrant(){
            return new dotacia() { adresa = "sdf", dic = "sdf", email = "sdf", ico = "23", kraj = "sdf", mesto = "sdf"  };
            
        }

    }


    
}
