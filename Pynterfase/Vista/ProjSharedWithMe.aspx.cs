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
    public partial class ProjSharedWithMe : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            ClusuarioL objUSL = new ClusuarioL();
            ClUsuarioE objUSD = objUSL.mtdGetAllUser(Session["usuario"].ToString());
            if (!IsPostBack) {

                ClProyectoL objProjL = new ClProyectoL();
                List<ClCompartirProj> listacompartir = objProjL.mtdGetSharedProjectsByUserId(objUSD.IdUsuario.ToString());

                RpProyectos.DataSource = listacompartir;
                RpProyectos.DataBind();

            }
            




        }

        protected void btnOpenProj_Click(object sender, EventArgs e)
        {

            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblId = (Label)item.FindControl("lblId");
            int idProyecto = Convert.ToInt32(lblId.Text);

            Response.Redirect("~/Vista/Editor.aspx?iPr=" + idProyecto);


        }
    }
}