using Pynterfase.Datos;
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
    public partial class ProjSaved : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["usuario"].ToString() == null || Session["usuario"].ToString() == "")
            {

                Response.Redirect("~/Login.aspx");

            }

            ClusuarioL objUSL = new ClusuarioL();
            ClUsuarioE objUSE = objUSL.mtdGetAllUser(Session["usuario"].ToString());


            if (!IsPostBack)
            {

                ClProyectoL objPROJL = new ClProyectoL();
                List<ClSavedProjE> listaProyecto = objPROJL.mtdGetsavedProjectsByUSerId(objUSE.IdUsuario.ToString());
                RPProyectos.DataSource = listaProyecto;
                RPProyectos.DataBind();

            }






        }

        protected void btnIMGSave_Click(object sender, ImageClickEventArgs e)
        {
            ImageButton btn = (ImageButton)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblIdProyecto = (Label)item.FindControl("lblId");
            int idProyecto = Convert.ToInt32(lblIdProyecto.Text);

            ClusuarioL objUSL = new ClusuarioL();
            ClUsuarioE objUSE = objUSL.mtdGetAllUser(Session["usuario"].ToString());

            ClProyectoL objProjL = new ClProyectoL();
            int res = objProjL.mtdDeleteFromSaved( objUSE.IdUsuario.ToString() , idProyecto.ToString());

            if (res == 1) {

                List<ClSavedProjE> listaProyecto = objProjL.mtdGetsavedProjectsByUSerId(objUSE.IdUsuario.ToString());
                RPProyectos.DataSource = listaProyecto;
                RPProyectos.DataBind();


            }


        }

        protected void btnOpen_Click(object sender, EventArgs e)
        {

            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblIdProyecto = (Label)item.FindControl("lblId");
            int idProyecto = Convert.ToInt32(lblIdProyecto.Text);

            Response.Redirect("~/Vista/Visor.aspx?Ipr=" + idProyecto);

        }
    }
}