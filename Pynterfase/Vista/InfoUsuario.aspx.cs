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

        int profilepickselection = 0;

        protected void Page_Load(object sender, EventArgs e)
        {

            
            if (!IsPostBack)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ocultarelementos", "onhideall();", true);
            }
                


            


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

        protected void avatarpic1_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
            profilepickselection = 1;
        }

        protected void avatarpic2_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
            profilepickselection = 2;
        }

        protected void avatarpic3_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
            profilepickselection = 3;
        }

        protected void avatarpic4_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
            profilepickselection = 4;
        }

        protected void avatarpic5_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
            profilepickselection = 5;
        }

        protected void avatarpic6_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);
            profilepickselection = 6;
        }

        protected void btnUploadImg_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowimg();", true);

            int a = profilepickselection;
            int b = 0; ;



        }
    }
}