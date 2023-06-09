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

            ClProyectoL objProjL = new ClProyectoL();
            List<ClCompartirProj> listacompartir = objProjL.mtdGetSharedProjectsByUserId(objUSD.IdUsuario.ToString());

            RpProyectos.DataSource = listacompartir;
            RpProyectos.DataBind();




        }
    }
}