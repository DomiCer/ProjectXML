using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Overovac
{
    public static class StaticListDominika
    {
        //podporovany algoritmus kanonikalizacie
        public static string CAN_METH_ALG = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";

        //podporovane podpisove schemy, v ramci formatu XADES_ZEP
        public static string[] MOZNE_SIG_SCHEMAS =
        {
            "http://www.w3.org/2000/09/xmldsig#dsa-sha1",
            "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
            "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256",
            "http://www.w3.org/2001/04/xmldsig-more#rsa-sha384",
            "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"
        };

        //podporovane algoritmy na vypocet dig. odtlacku, v ramci formatu XADES_ZEP
        public static string[] MOZNE_ALG_DIG_ODTLACKU =
        {
            "http://www.w3.org/2000/09/xmldsig#sha1",
            "http://www.w3.org/2001/04/xmldsig-more#sha224",
            "http://www.w3.org/2001/04/xmlenc#sha256",
            "http://www.w3.org/2001/04/xmldsig-more#sha384",
            "http://www.w3.org/2001/04/xmlenc#sha512"
        };
    }
}
