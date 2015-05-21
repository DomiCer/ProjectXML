using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Overovac.Test
{
    public abstract class TestBase
    {
        public bool noError { get; set; }
        public string baseUrl { get { return AppDomain.CurrentDomain.BaseDirectory.Replace("Overovac.Test\\bin\\Debug", "Inputs\\"); } }
        public XmlDocument XmlDoc { get; set; }
    }
}
