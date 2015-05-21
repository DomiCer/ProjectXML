using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Xml;

namespace Overovac.Test
{
    [TestClass]
    public class VerificationTests
    {
        public VerificationTests() {
            noError = true;
            baseUrl = AppDomain.CurrentDomain.BaseDirectory.Replace("Overovac.Test\\bin\\Debug", "Inputs\\");
             XmlDoc = new XmlDocument();
        }
        public bool noError { get; set; }
        public string baseUrl { get; set; }
        XmlDocument XmlDoc { get; set; }


        [TestMethod]
        public void DatovaObalka()
        {            
            XmlDoc.Load(baseUrl + "01XadesT.xml");

            if (XmlDoc.FirstChild.Attributes.Count < 2)
                noError = false;
            if (XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:xzep") == null && XmlDoc.FirstChild.Attributes.GetNamedItem("xmlns:ds") == null)
                noError = false;
            Assert.IsTrue(noError);
        }

        [TestMethod]
        public void XmlSignatures()
        {
            XmlNode signedInfo = null;
            XmlDoc.Load(baseUrl + "01XadesT.xml");
            var signatureNode = XmlDoc.GetElementsByTagName("ds:Signature").Count == 0 ? null : XmlDoc.GetElementsByTagName("ds:Signature").Item(0);
            if (signatureNode == null)
                noError = false;
            else
            {

                if (signatureNode.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(signatureNode.Attributes.GetNamedItem("Id").Value))
                    noError = false;
                XmlNamespaceManager nsmgr = new XmlNamespaceManager(XmlDoc.NameTable);
                nsmgr.AddNamespace("ds", "http://www.w3.org/2000/09/xmldsig#");
                if (signatureNode.Attributes.GetNamedItem("xmlns:ds") == null && string.IsNullOrEmpty(signatureNode.Attributes.GetNamedItem("xmlns:ds").Value))
                    noError = false;

                if (signatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", nsmgr) != null)
                    noError = false;
                else
                    signedInfo = signatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", nsmgr);
                if (signedInfo == null)
                    noError = false;

                //signedInfo
                if (signedInfo.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(signedInfo.Attributes.GetNamedItem("Id").Value))
                    noError = false;



            }
            

        }
    }
}
