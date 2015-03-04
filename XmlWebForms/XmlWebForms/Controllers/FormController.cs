using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using XmlWebForms.Models;
namespace XmlWebForms.Controllers
{
    public class FormController : Controller
    {
        //
        // GET: /Form/

        public ActionResult index()
        {
            return View(new dotacia());
        }



    }
}
