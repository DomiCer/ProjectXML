using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Xml.Xsl;
using System.Xml.Linq;
using System.Xml.Serialization;
using System.Xml.Schema;
using XmlWebForms.Models;
namespace XmlWebForms.Controllers
{
    public class FormController : Controller
    {
        //
        // GET: /Form/

        public ActionResult index()
        {
            return View(new dotacia());
        }

        [HttpPost]
        
        public ActionResult index(Models.dotacia dotaciaObj)
        {
            if (Request.Form["ValidateXML"] !=null )
            {
                XmlSchemaSet schemas = new XmlSchemaSet();
                schemas.Add("", @"C:\AllMyDocs\FIIT\02_Ing\2_roc\LS\spracovanie informacii v podnikani a verejnej sprave\ProjectXML\ProjectXML\Resources\dotacie.xsd");

                Console.WriteLine("Attempting to validate");
                XDocument custOrdDoc = CreateXML(dotaciaObj);  
                bool errors = false;
                custOrdDoc.Validate(schemas, (o, e) =>
                {
                    Console.WriteLine("{0}", e.Message);
                    errors = true;
                });
                string result = errors ? "did not validate" : "validated";
                ViewBag.errors = errors;
                ViewBag.xml = custOrdDoc.ToString();
            }
            else if (Request.Form["Transform"] != null)
            {
                XDocument custOrdDoc = CreateXML(dotaciaObj);
                System.IO.File.WriteAllText("C:/AllMyDocs/FIIT/02_Ing/2_roc/LS/spracovanie informacii v podnikani a verejnej sprave/ProjectXML/ProjectXML/Resources/xxx.xml", custOrdDoc.ToString());

                XslTransform myXslTransform = new XslTransform();
                myXslTransform.Load("C:/AllMyDocs/FIIT/02_Ing/2_roc/LS/spracovanie informacii v podnikani a verejnej sprave/ProjectXML/ProjectXML/Resources/transformacia.xslt");
                myXslTransform.Transform("C:/AllMyDocs/FIIT/02_Ing/2_roc/LS/spracovanie informacii v podnikani a verejnej sprave/ProjectXML/ProjectXML/Resources/xxx.xml", "C:/AllMyDocs/FIIT/02_Ing/2_roc/LS/spracovanie informacii v podnikani a verejnej sprave/ProjectXML/ProjectXML/Resources/output.txt");
                return File("C:/AllMyDocs/FIIT/02_Ing/2_roc/LS/spracovanie informacii v podnikani a verejnej sprave/ProjectXML/ProjectXML/Resources/output.txt", "txt");
            }
            return View(dotaciaObj);
        }

       
        public XDocument CreateXML(Object ClassObject)
        {
            XDocument xmlDoc = new XDocument();   //Represents an XML document, 
            // Initializes a new instance of the XmlDocument class.          
            XmlSerializer xmlSerializer = new XmlSerializer(ClassObject.GetType());
            // Creates a stream whose backing store is memory. 
            using (MemoryStream xmlStream = new MemoryStream())
            {
                xmlSerializer.Serialize(xmlStream, ClassObject);
                xmlStream.Position = 0;
                //Loads the XML document from the specified string.
                xmlDoc = XDocument.Load(xmlStream);
                return xmlDoc;
            }
        }
    }
}
