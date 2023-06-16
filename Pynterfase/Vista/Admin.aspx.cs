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
    public partial class Admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            ClusuarioL objUSL = new ClusuarioL();
            ClProyectoL objProjL  = new ClProyectoL();  
            ClUsuarioE objUsuario = objUSL.mtdGetAllUser(Session["usuario"].ToString());

            ClRolL objRolL = new ClRolL();
            List<ClRolE> listaRoles = objRolL.mtdGetAllRolById(objUsuario.IdRol.ToString());

            var rolname = listaRoles[0].nombre;
            
            if (rolname == "Usuario" || rolname == "usuario")
            {

                Response.Redirect("~/Inicio.aspx");    


            }
            
            if (!IsPostBack)
            {

                List<ClUsuarioE> listaUsuarios = objUSL.mtdGetAllUsersInApp();
                RPUsuarios.DataSource = listaUsuarios;
                RPUsuarios.DataBind();

                List<ClproyectoE> listaProyectos = objProjL.mtdGetAllProjectsInApp();
                RPProjects.DataSource = listaProyectos;
                RPProjects.DataBind();

            }




        }

        protected void btnBuscarUser_Click(object sender, EventArgs e)
        {

            if (txtSearchUser.Text != "" && txtSearchUser.Text.Trim() != "")
            {

                ClusuarioL objUSL = new ClusuarioL();
                List<ClUsuarioE> listaUsuarios = objUSL.mtdSearchUserByName(txtSearchUser.Text);

                RPUsuarios.DataSource= listaUsuarios;
                RPUsuarios.DataBind();

            }


        }

        protected void btnSearchProj_Click(object sender, EventArgs e)
        {

            if (txtSearchProj.Text != "" && txtSearchProj.Text.Trim() != "") { 
            
                ClProyectoL objProjL = new ClProyectoL();
                List<ClproyectoE> listaprojs = objProjL.mtdSearchProjectsByName(txtSearchProj.Text);

                RPProjects.DataSource= listaprojs;
                RPProjects.DataBind();

            }


        }
    }
}