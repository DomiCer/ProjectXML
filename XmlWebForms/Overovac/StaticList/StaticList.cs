using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Overovac
{
    public static class StaticList
    {
        public static List<string> SignedInfoReferenceTypeList {
            get
            {
                return new List<string>()
                {
                    "http://www.w3.org/2000/09/xmldsig#Object",
                    "http://www.w3.org/2000/09/xmldsig#SignatureProperties"
                };
            }
        }
    }
}
