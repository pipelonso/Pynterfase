using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class ProjectsContent : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

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
    }
}