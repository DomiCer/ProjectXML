using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Overovac.Verification.XmlSignatureNS
{
    public class OtherElements
    {
        public OtherElements(XmlDocument xmlDoc, XmlNode signatureNode, XmlNamespaceManager mngr)
        {
            XmlDoc = xmlDoc;
            Nsmgr = mngr;
            SignedInfo = null;
            SignatureValue = null;
            SignatureNode = signatureNode;
                //XmlDoc.GetElementsByTagName("ds:Signature").Count == 0 ? null : XmlDoc.GetElementsByTagName("ds:Signature").Item(0);
            NoError = true;
        }

        private XmlDocument XmlDoc { get; set; }
        private XmlNamespaceManager Nsmgr { get; set; }
        XmlNode SignedInfo { get; set; }
        XmlNode SignatureValue { get; set; }
        XmlNode SignatureNode { get; set; }
        string SignatureID { get; set; }
        private bool NoError { get; set; }

        public bool Validate() {
            ExistSignatureAtributes();
            CheckSignatureValueID();
            ExistSignedInfoAtributes();
            CountSignedInfoReferencies();
            return true;
        }

        private void ExistSignatureAtributes()
        {   
            if (SignatureNode == null)
                NoError = false;
            else
            {
                if (SignatureNode.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(SignatureNode.Attributes.GetNamedItem("Id").Value))
                    NoError = false;

                if (SignatureNode.Attributes.GetNamedItem("xmlns:ds") == null && string.IsNullOrEmpty(SignatureNode.Attributes.GetNamedItem("xmlns:ds").Value))
                    NoError = false;

            }
            //SET SIGNATURE ID
            SignatureID = SignatureNode.Attributes.GetNamedItem("Id").Value;

            if (!NoError)
                throw new Exception("chyba atributov ExistSignatureAtributes");

        }

        private void ExistSignedInfoAtributes()
        {
            if (SignatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", Nsmgr) == null)
                NoError = false;
            else
                SignedInfo = SignatureNode.SelectSingleNode("//ds:Signature//ds:SignedInfo", Nsmgr);
            if (SignedInfo == null)
                NoError = false;
            if (!NoError)
                throw new Exception("chyba ExistSignedInfoAtributes");
        }

        private void CountSignedInfoReferencies()
        {
            //ds:KeyInfo 
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeKeyinfo + "']", Nsmgr).Count == 0 
                        &&
                       SignedInfo.SelectNodes("ds:Reference[@Id='" + StaticListOtherElements.GetReferenceTypeKeyinfoID(SignatureID) + "']", Nsmgr).Count == 0 
                       ? false : true;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-KeyInfo");
            
            //ds:SignatureProperties
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeDsSignatureProperties + "']", Nsmgr).Count == 0
                        &&
                       SignedInfo.SelectNodes("ds:Reference[@Id='" + StaticListOtherElements.GetReferenceTypeDsSignaturePropertiesID(SignatureID) + "']", Nsmgr).Count == 0 
                       ? false : true;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-ds:SignatureProperties");
            
            //xades:SignatureProperties
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeXadesSignatureProperties + "']", Nsmgr).Count == 0
                        &&
                       SignedInfo.SelectNodes("ds:Reference[@Id='" + StaticListOtherElements.GetReferenceTypeXadesSignaturePropertiesID(SignatureID) + "']", Nsmgr).Count == 0 
                       ? false : true;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-xades:SignatureProperties");
            
            //manifest
            NoError = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeManifet + "']", Nsmgr).Count == 0 ? false : true;
            if (!NoError)
                throw new Exception("chyba CountSignedInfoReferencies-manifest");

            var manifests = SignedInfo.SelectNodes("ds:Reference[@Type='" + StaticListOtherElements.ReferenceTypeManifet + "']", Nsmgr);

            for (int i = 0; i < manifests.Count; i++)
            {
                var dataObjectFormat = XmlDoc.GetElementsByTagName("xades:DataObjectFormat");
                if(dataObjectFormat.Count == 1){
                    if (dataObjectFormat.Item(0).Attributes.GetNamedItem("ObjectReferenc").Value != manifests[i].Attributes.GetNamedItem("Id").Value)
                    {
                        NoError = false;
                        throw new Exception("Referencia na Manifest neodkazuje na DataObjectFormat");
                    }

                }
            }

        }

        private void CheckSignatureValueID()
        {
            // signatureValue
            if (SignatureNode.SelectSingleNode("ds:SignatureValue", Nsmgr) == null)
                NoError = false;
            else
            {
                SignatureValue = SignatureNode.SelectSingleNode("ds:SignatureValue", Nsmgr);
                if (SignatureValue.Attributes.GetNamedItem("Id") == null && string.IsNullOrEmpty(SignatureValue.Attributes.GetNamedItem("Id").Value))
                    NoError = false;
            }

            if (!NoError)
                throw new Exception("chyba CheckSignatureValueID");

        }
    
    }
}
