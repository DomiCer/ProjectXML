using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Xml;

namespace Overovac.Test
{
    [TestClass]
    public class OtherElementsTests : TestBase
    {
        public OtherElementsTests()
        {
            noError = true;
            XmlDoc = new XmlDocument();
        }

        [TestMethod]
        public void ExistReferenceTypeTest()
        {

        }
    }
}
