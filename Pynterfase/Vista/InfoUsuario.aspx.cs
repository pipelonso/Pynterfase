using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class InfoUsuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            

                ScriptManager.RegisterStartupScript(this, GetType(), "ocultarelementos", "onhideall();", true);


             


        }

        protected void ediNamebtn_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowname();", true);
   
        }

        protected void btnChangeProfPic_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
        }

        protected void btnEditPassShow_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowpass();", true);
        }
    }
}