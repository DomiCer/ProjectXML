using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;
using Overovac.Verification;

namespace Overovac
{
    public partial class Overovac : Form
    {

        public XmlDocument XmlDoc { get; set; }
        public XmlNamespaceManager NSMngr { get; set; }
        public static string XADES_NAMESPACE { get { return "http://www.w3.org/2000/09/xmldsig#"; } }

        public Overovac()
        {
            InitializeComponent();
            XmlDoc = new XmlDocument();
            XmlDoc.PreserveWhitespace = true;
        }
                
        private void btnBrowse_Click(object sender, EventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog();
            ofd.CheckFileExists = true;
            ofd.Multiselect = false;
            ofd.InitialDirectory = AppDomain.CurrentDomain.BaseDirectory;
            ofd.Filter = "súbory XML|*.xml";
            if (ofd.ShowDialog() == DialogResult.OK)
            {
                this.txtFile.Text = ofd.FileName;

                XmlDoc.Load(ofd.FileName);

                string[] splitted = ofd.FileName.Split(new string[]{"/","\\"},StringSplitOptions.None);
                txtLog.Text = "Nacitany subor " + splitted[splitted.Length-1] +"\r\n";

                NSMngr = new XmlNamespaceManager(XmlDoc.NameTable);
                
                string nsPrefix = XmlDoc.GetPrefixOfNamespace(XADES_NAMESPACE);
                nsPrefix = "ds";
                NSMngr.AddNamespace(nsPrefix, XADES_NAMESPACE);
            }
        }

        private void btnOverit_Click(object sender, EventArgs e)
        {
            try
            {
                var verif = new Verification.Verification(XmlDoc, NSMngr);                
                txtLog.Text += string.Join("\n", verif.Validate().ToArray()); 
                txtLog.Text += "\n Hotovo , vsetko OK :)";
            }
            catch (Exception ex)
            {
                txtLog.Text += ex.Message;
            }
        }

        private void Overit()
        {
 
        }

       
    }
}
