using Pynterfase.Entidades;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase
{
    public partial class Principal : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["usuario"].ToString() == "")
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "HideUser", "sesioncontrols();", true);

            }
            else {

                ClusuarioL objUsuarioL = new ClusuarioL();
                ClUsuarioE objUSE = objUsuarioL.mtdGetAllUser(Session["usuario"].ToString());
                lblUsername.Text = objUSE.nombre;
                imgUser.ImageUrl = objUSE.imagenUsuario;
                ScriptManager.RegisterStartupScript(this, GetType(), "HideUser", "showUserSesion();", true);

            }


        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Login.aspx");
        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/Register.aspx");
        }

        protected void btnUser_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/Proyectos.aspx");
        }

        protected void btnHome_Click(object sender, EventArgs e)
        {

            Response.Redirect("~/Inicio.aspx");

        }

        protected void btnDocumentación_Click(object sender, EventArgs e)
        {

            Response.Redirect("~/Documentation.aspx");

        }

        protected void btnGotoContacto_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Contact.aspx");
        }
    }
}