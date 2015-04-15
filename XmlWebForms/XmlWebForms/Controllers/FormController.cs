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
using Org.BouncyCastle;
using Org.BouncyCastle.Tsp;

namespace XmlWebForms.Controllers
{
    public class FormController : Controller
    {
        //
        // GET: /Form/
        public string XsdPath { get { return HttpContext.Server.MapPath("~/App_Data/dotacie.xsd"); } }
        public string XmlFilePath { get { return HttpContext.Server.MapPath("~/App_Data/xxx.xml"); } }
        public string TemplatePath { get { return HttpContext.Server.MapPath("~/App_Data/transformacia.xslt"); } }
        public string OutputFile { get { return HttpContext.Server.MapPath("~/App_Data/output.txt"); } }
        public string SignedDocument { get { return HttpContext.Server.MapPath("~/App_Data/signedDoc.xml"); } }
        public string SignedDocumentWithTS { get { return HttpContext.Server.MapPath("~/App_Data/signedDocTS.xml"); } }

        public string XsdXades { get { return HttpContext.Server.MapPath("~/App_Data/xades_zep.v1.0.xsd"); } }

        //namespaces
        private const string nsXsi = "http://www.w3.org/2001/XMLSchema-instance";
        private const string nsDs = "http://www.w3.org/2000/09/xmldsig#";
        private const string nsXzep = "http://www.ditec.sk/ep/signature_formats/xades_zep/v1.0";
        private const string nsXsd = "http://www.w3.org/2001/XMLSchema";
        private const string nsXades = "http://uri.etsi.org/01903/v1.3.2#";

        //pre xsd schemu xades
        private const string nsTargetXades = "http://www.ditec.sk/ep/signature_formats/xades_zep/v1.0";


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
                schemas.Add("", XsdPath);

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

                ViewBag.xsl = ReadFile(TemplatePath);
                ViewBag.xsd = ReadFile(XsdPath);

            }
            else if (Request.Form["Transform"] != null)
            {
                XDocument custOrdDoc = CreateXML(dotaciaObj);
                System.IO.File.WriteAllText(XmlFilePath, custOrdDoc.ToString());

                XslTransform myXslTransform = new XslTransform();
                myXslTransform.Load(TemplatePath);
                myXslTransform.Transform(XmlFilePath, OutputFile); 
                return File(OutputFile, "txt");
            }
            else if (Request.Form["TimeStamp"] != null)
            {
                bool success = false;

                XmlDocument doc = new XmlDocument();
                doc.PreserveWhitespace = true;
                if (System.IO.File.Exists(SignedDocument))
                {
                    doc.Load(SignedDocument);

                    success = AddTimeStamp(doc);
                    System.IO.File.WriteAllText(SignedDocumentWithTS, doc.InnerXml, System.Text.Encoding.UTF8);
                }

                ViewBag.tsXml = doc.InnerXml;
                ViewBag.tsErrors = !success;
                ViewBag.xsl = ReadFile(TemplatePath);
                ViewBag.xsd = ReadFile(XsdPath);
                ViewBag.xml = ReadFile(XmlFilePath);

            }

            return View(dotaciaObj);
        }

       
        public bool AddTimeStamp(XmlDocument signedDocument)
        {
            bool success = false;
            try
            {
                var names = new XmlNamespaceManager(signedDocument.NameTable);
                names.AddNamespace("xsi", nsXsi);
                names.AddNamespace("ds", nsDs);
                names.AddNamespace("xzep", nsXzep);
                names.AddNamespace("xsd", nsXsd);
                names.AddNamespace("xades", nsXades);

                //precitanie signature value
                XmlNode sigValueNode = signedDocument.SelectSingleNode("//ds:SignatureValue", names);
                byte[] dataToTS = System.Text.Encoding.UTF8.GetBytes(sigValueNode.OuterXml);

                //request na servis, ktory komunikuje s TSA
                TSReference.TSSoapClient tsClient = new TSReference.TSSoapClient();
                //odpoved
                string ret = tsClient.GetTimestamp(Convert.ToBase64String(dataToTS));
                byte[] data = Convert.FromBase64String(ret);

                //konverzia odpovede od TSA na ts response
                TimeStampResponse tsResponse = new TimeStampResponse(data);

                //uprava xml
                XmlNode qualifyingPropertiesNode = signedDocument.SelectSingleNode("//xades:QualifyingProperties", names);

                XmlNode unsignedPropertiesNode = signedDocument.CreateElement("xades:UnsignedProperties", nsXades);
                XmlNode unsignedSignaturePropertiesNode = signedDocument.CreateElement("xades:UnsignedSignatureProperties", nsXades);

                XmlNode signatureTimeStampNode = signedDocument.CreateElement("xades:SignatureTimeStamp", nsXades);
                XmlAttribute id = signedDocument.CreateAttribute("Id");
                id.Value = Guid.NewGuid().ToString();
                signatureTimeStampNode.Attributes.Append(id);

                XmlNode encapsulatedTimeStampNode = signedDocument.CreateElement("xades:EncapsulatedTimeStamp", nsXades);

                //byte[] b = tsResponse.TimeStampToken.GetEncoded();
                //string s = System.Text.Encoding.UTF8.GetString(b);
                string str = Convert.ToBase64String(tsResponse.TimeStampToken.GetEncoded());
                XmlText encapsulatedTimeStampText = signedDocument.CreateTextNode(str);

                encapsulatedTimeStampNode.AppendChild(encapsulatedTimeStampText);
                signatureTimeStampNode.AppendChild(encapsulatedTimeStampNode);
                unsignedSignaturePropertiesNode.AppendChild(signatureTimeStampNode);
                unsignedPropertiesNode.AppendChild(unsignedSignaturePropertiesNode);

                qualifyingPropertiesNode.AppendChild(unsignedPropertiesNode);

                success = true;
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                success = false;
            }

            return success;
        }

        [HttpPost]
        public JsonResult SaveSignedDocument(string id)
        {
            byte[] data = Convert.FromBase64String(id);
            System.IO.File.WriteAllBytes(SignedDocument, data);

            var result = new { Success = "True", Message = "OK" };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        #region Methods

        public string ReadFile(string FilePath) {

            string text = System.IO.File.ReadAllText(FilePath);

            return text;
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

        #endregion
    }
}
