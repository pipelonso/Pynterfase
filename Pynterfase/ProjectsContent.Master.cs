using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Pynterfase.Entidades;
using Pynterfase.Logica;


namespace Pynterfase.Vista
{
    public partial class ProjectsContent : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            ClusuarioL objUSL = new ClusuarioL();
            ClUsuarioE objUsuario = objUSL.mtdGetAllUser(Session["usuario"].ToString());

            ClRolL objRolL = new ClRolL();
            List<ClRolE> listaRoles = objRolL.mtdGetAllRolById(objUsuario.IdRol.ToString());

            var rolname = listaRoles[0].nombre;
            //ScriptManager.RegisterStartupScript(this, GetType(), "AparecerAdmin", "thisThinksStarts();", true);
            


            if (rolname == "Usuario" || rolname == "usuario")
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "AparecerAdmin", "thisThinksStarts();", true);


            }
            else if(rolname == "Administrador")
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "AparecerAdmin", "IsAdmin();", true);


            }        
           


        }

        protected void LinkButton1_Click(object sender, EventArgs e)
        {

            Response.Redirect("~/Vista/InfoUsuario.aspx");


        }

        protected void LinkButton2_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/Proyectos.aspx");
        }

        protected void btnHome_Click(object sender, EventArgs e)
        {

            Response.Redirect("~/Inicio.aspx");

        }

        //protected void btnShared_Click(object sender, EventArgs e)
        //{

        //    Response.Redirect("~/Vista/ProjSharedWithMe.aspx");

        //}

        //protected void btnSaved_Click(object sender, EventArgs e)
        //{

        //    Response.Redirect("~/Vista/ProjSaved.aspx");

        //}

        protected void btnShared_Click1(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/ProjSharedWithMe.aspx");
        }

        protected void btnSaved_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/ProjSaved.aspx");
        }

        protected void btnAdmin_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/Admin.aspx");
        }
    }
}