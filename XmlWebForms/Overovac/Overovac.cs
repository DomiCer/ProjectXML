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

        public Overovac()
        {
            InitializeComponent();
            XmlDoc = new XmlDocument();
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
                var verif = new Verification.Verification(XmlDoc);
                txtLog.Text = string.Join("\n", verif.Validate().ToArray()); 

            }
        }

       
    }
}
