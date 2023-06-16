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

            if (!IsPostBack) {

                ddlEstado.Items.Add("Activo");
                ddlEstado.Items.Add("Inactivo");

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

        protected void lblInspeccionarUser_Click(object sender, EventArgs e)
        {

            LinkButton btn = (LinkButton)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblCorreo = (Label)item.FindControl("lblCorreoUserRP");
            var usermail = lblCorreo.Text;


            ClusuarioL objUSL = new ClusuarioL();   
            ClUsuarioE objUsuario = objUSL.mtdGetAllUser(usermail);

            lblIdUser.Text = objUsuario.IdUsuario.ToString();
            lblUserNameF.Text = objUsuario.nombre;
            lblUserMail.Text = objUsuario.correo;
            

            int vefirified = objUSL.mtdCheckVerification(usermail);

            if (vefirified == 1) {

                lblVerificado.Text = "Si";

            }
            else
            {

                lblVerificado.Text = "No";

            }

            userPickImg.ImageUrl = objUsuario.imagenUsuario;

        }

        protected void btnApplyState_Click(object sender, EventArgs e)
        {

            //Control del estado de actividad
            ClEstadoL objEstadoL = new ClEstadoL();

            string newstate = ddlEstado.SelectedValue;

            string currentId = lblIdUser.Text;

            int changed = objEstadoL.mtdUpdateUserStatusByMail(currentId, newstate);

            if (changed == 1)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }

        }

        protected void btnChangeUserName_Click(object sender, EventArgs e)
        {

            string correo = lblUserMail.Text;

            ClusuarioL objUSL = new ClusuarioL();

            if (txtUserName.Text.Trim() != "") {

                int changed = objUSL.mtdUpdateName(txtUserName.Text, correo);

                if (changed == 1) {

                    ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

                }
                else {

                    ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

                }


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "VoidSpaces", "voidall();", true);
            }






        }

        protected void btnRestablecerFoto_Click(object sender, EventArgs e)
        {
            Random rnd = new Random();
            int randompicnum = rnd.Next(1, 6);
            ClusuarioL objUsuarioL = new ClusuarioL();
            int randompicture = objUsuarioL.UpdatePic("~/Vista/Pynterfase avatars/" + randompicnum.ToString() + ".png", lblUserMail.Text);
            
            if (randompicnum >= 1) {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }


        }

        protected void btnDeleteUser_Click(object sender, EventArgs e)
        {

            ClusuarioL objUSL = new ClusuarioL();
            int res = objUSL.mtdDeleteUserByidKiller(lblIdUser.Text);
            
            if (res >= 1) {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

            }
            else{

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }

        }
    }
}