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
    public partial class Admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["usuario"].ToString() == null || Session["usuario"].ToString() == "")
            {

                Response.Redirect("~/Login.aspx");

            }


            ClusuarioL objUSL = new ClusuarioL();
            ClProyectoL objProjL  = new ClProyectoL();  
            ClUsuarioE objUsuario = objUSL.mtdGetAllUser(Session["usuario"].ToString());

            ClRolL objRolL = new ClRolL();
            List<ClRolE> listaRoles = objRolL.mtdGetAllRolById(objUsuario.IdRol.ToString());

            var rolname = listaRoles[0].nombre;

            ScriptManager.RegisterStartupScript(this, GetType(), "startAll", "startAll();", true);

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

                ddlProjectPrivacy.Items.Add("Publico");
                ddlProjectPrivacy.Items.Add("Privado");
                

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

            ScriptManager.RegisterStartupScript(this, GetType(), "ShowUsers", "ShowUsers();", true);

            LinkButton btn = (LinkButton)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblCorreo = (Label)item.FindControl("lblCorreoUserRP");
            var usermail = lblCorreo.Text;


            ClusuarioL objUSL = new ClusuarioL();   
            ClUsuarioE objUsuario = objUSL.mtdGetAllUser(usermail);

            lblIdUser.Text = objUsuario.IdUsuario.ToString();
            lblUserNameF.Text = objUsuario.nombre;
            lblUserMail.Text = objUsuario.correo;
            
            if (objUsuario.IdRol == 1)
            {

                btnAlternateAdmin.Text = "Conceder";

            }

            if (objUsuario.IdRol == 2)
            {

                btnAlternateAdmin.Text = "Revocar";

            }

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

        protected void lblInspeccionarProj_Click(object sender, EventArgs e)
        {


            ScriptManager.RegisterStartupScript(this, GetType(), "openProj", "ShowProjects();", true);

            LinkButton btn = (LinkButton)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblIDProj = (Label)item.FindControl("lblIDProj");
            var projID = lblIDProj.Text;

            ClProyectoL objProyectoL = new ClProyectoL();

            ClproyectoE objProjE  = objProyectoL.mtdGetProjectById(projID);
            lblNombreProjRP.Text = objProjE.nombreProyecto.ToString();   
            lblIdProj.Text = objProjE.IdProyecto.ToString();

            ClUsuarioE objUSE = objProyectoL.mtdGetProjectOwner(projID);

            lblAutorProj.Text = objUSE.nombre;

            lblVisibilidad.Text = objProjE.visibilidad;

            //inspeccionar proyecto

            List<ClCompartirUserInfo> listaUsuariosProj = objProyectoL.mtdGetAllUserInProject(projID);

            RpUsersOnProj.DataSource = listaUsuariosProj;
            RpUsersOnProj.DataBind();

            txtEditNameProj.Text = objProjE.nombreProyecto;

            if (objProjE.visibilidad == "Publico") {

                ddlProjectPrivacy.SelectedIndex = 0;

            }
            else
            {

                ddlProjectPrivacy.SelectedIndex = 1;

            }

        }

        protected void btnDeleteUserRp_Click(object sender, EventArgs e)
        {

            Button btnUpdate = (Button)sender;
            RepeaterItem item = (RepeaterItem)btnUpdate.NamingContainer;

            Label lblCorreo = (Label)item.FindControl("lblCorreoRp");
            string correo = lblCorreo.Text;

            ClProyectoL objProjL = new ClProyectoL();
            int res = objProjL.mtdDeleteUserOnProjectByMail(correo, lblIdProj.Text);

            if (res == 1)
            {


                ClProyectoL objProyectoL = new ClProyectoL();

                List<ClCompartirUserInfo> listaUsuariosProj = objProyectoL.mtdGetAllUserInProject(lblIdProj.Text);


                RpUsersOnProj.DataSource = listaUsuariosProj;
                RpUsersOnProj.DataBind();

            }


        }

        protected void btnUpdateUser_Click(object sender, EventArgs e)
        {

            Button btnUpdate = (Button)sender;
            RepeaterItem item = (RepeaterItem)btnUpdate.NamingContainer;

            Label lblCorreo = (Label)item.FindControl("lblCorreoRp");
            CheckBox check = (CheckBox)item.FindControl("chkEditableUser");

            string correo = lblCorreo.Text;
            bool ischeked = check.Checked;
            ClProyectoL objProjL = new ClProyectoL();
            int res = objProjL.mtdUpdateEditableUserByMail(correo, ischeked.ToString());

            if (res == 1)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActualizarAccesoDeUsuario", "UpdatedAccessUser();", true);

            }

        }

        protected void btnUpdateProjName_Click(object sender, EventArgs e)
        {

            if (txtEditNameProj.Text.Trim() != "")
            {

                ClProyectoL objPROJL = new ClProyectoL();
                int res = objPROJL.mtdEditProjectNameById(lblIdProj.Text, txtEditNameProj.Text);

                if (res == 1)
                {

                    ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

                }
                else
                {

                    ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

                }

            }

        }

        protected void btnUpdateProjetPrivacy_Click(object sender, EventArgs e)
        {

            string selected = ddlProjectPrivacy.SelectedValue;
            ClProyectoL objProjL = new ClProyectoL();
            int res = objProjL.mtdUpdateVisibilityById(lblIdProj.Text, selected);


        }

        protected void btnDeleteProject_Click(object sender, EventArgs e)
        {

            ClProyectoL projL = new ClProyectoL();
            int res = projL.mtdDeleteProjectKiller(lblIdProj.Text);

            if (res < 1) {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

            }


        }

        protected void btnVerifyUSer_Click(object sender, EventArgs e)
        {
            ClusuarioL objUSL = new ClusuarioL();
            int res = objUSL.mtdForceVerification(int.Parse(lblIdUser.Text));

            if (res >= 1)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }




        }

        protected void btnAlternateAdmin_Click(object sender, EventArgs e)
        {
            ClusuarioL objUSL = new ClusuarioL();

            int res = 0;

            if (btnAlternateAdmin.Text == "Conceder")
            {

                res = objUSL.mtdGrantAdmin(int.Parse(lblIdUser.Text), Session["Usuario"].ToString());

            }

            if (btnAlternateAdmin.Text == "Revocar")
            {

                res = objUSL.mtdRevokeAdmin(int.Parse(lblIdUser.Text), Session["Usuario"].ToString());

            } 

            if (res >= 1) {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }

            

        }
    }
}