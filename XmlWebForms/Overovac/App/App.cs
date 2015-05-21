using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Overovac
{
    public static class App
    {
        public static string GetInputPath
        {
            get
            {
                return AppDomain.CurrentDomain.BaseDirectory.Replace("Overovac.Test\\bin\\Debug", "Inputs\\");
            }
        }
    }
}
