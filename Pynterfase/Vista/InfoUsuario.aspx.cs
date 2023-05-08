using Pynterfase.Entidades;
using Pynterfase.Logica;
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
                ClusuarioL objUSL = new ClusuarioL();
                ClUsuarioE objUSE = objUSL.mtdGetAllUser(Session["usuario"].ToString());
                lblUsername.Text = objUSE.nombre;
                lblMail.Text = objUSE.correo;
                imgUser.ImageUrl = objUSE.imagenUsuario;


            }
                


            


        }

        protected void ediNamebtn_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowname();", true);
            


        }

        protected void btnChangeProfPic_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
        }

        protected void btnEditPassShow_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarpass", "onshowpass();", true);
        }

        protected void avatarpic1_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            profilepickselection = 1;
        }

        protected void avatarpic2_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            profilepickselection = 2;
        }

        protected void avatarpic3_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            profilepickselection = 3;
        }

        protected void avatarpic4_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            profilepickselection = 4;
        }

        protected void avatarpic5_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            profilepickselection = 5;
        }

        protected void avatarpic6_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            
        }

        protected void btnUploadImg_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);

            



        }

        protected void btnUpdatePass_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarpass", "onshowpass();", true);
        }

        protected void btnEnviarNombre_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowname();", true);

            if (txtName.Text.Trim() != "" || txtName.Text != "") {

                ClusuarioL objUSL = new ClusuarioL();
                int resultado = objUSL.mtdUpdateName(txtName.Text, Session["usuario"].ToString());

                if (resultado == 1)
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
                }


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "camposvacios", "voidall();", true);

            }



        }
    }
}