using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class Visor : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            ScriptManager.RegisterStartupScript(this, GetType(), "ResizeCanvas", "onResizeCambas();", true);
            string iPr = Request.QueryString["iPr"];
            string path = Server.MapPath("~/Users/Projects/" + iPr + ".json");

            if (File.Exists(path))
            {

                string json = File.ReadAllText(path);
                ScriptManager.RegisterStartupScript(this, GetType(), "SendJsonToJs", "currentJson = " + json + " ;", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "sendID", "projectID = " + iPr + " ;", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "CallLoadReader", "loadstart();", true);


            }
        }
    }
}