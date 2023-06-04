using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class WriteJson : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (HttpContext.Current.Request.Files.Count > 0)
            {
                HttpPostedFile postedFile = HttpContext.Current.Request.Files[0];
                string fileName = HttpContext.Current.Request.Form["fileName"]; // Obtén el nombre del archivo

                string filePath = Server.MapPath("~/Users/Projects/" + fileName);
                postedFile.SaveAs(filePath);
            }



        }
    }
}