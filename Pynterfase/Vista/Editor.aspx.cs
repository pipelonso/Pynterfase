using Org.BouncyCastle.Crmf;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Text.Json;
using Pynterfase.TkElements;
using Pynterfase.Entidades;
using System.Xml.Linq;


namespace Pynterfase.Vista
{
    public partial class Editor : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
                    
            
            //Button myButton = new Button();
            //myButton.ID = "myButton";
            //myButton.Text = "Haz clic aquí";
            ////myButton.Click += new EventHandler(myButton_Click);
            //Form.Controls.Add(myButton);
            //startsall
            ScriptManager.RegisterStartupScript(this, GetType(), "OcultarPanelDeLienzoEditar", "CloseEditWindowSizePanel();", true);
            ScriptManager.RegisterStartupScript(this, GetType(), "HideEditor", "startsall();", true);
            

            string iPr = Request.QueryString["iPr"];
            ClProyectoL objProyectoL = new ClProyectoL();

            List<ClCompartirUserInfo> listaUsuariosProj = objProyectoL.mtdGetAllUserInProject(iPr);
            if (!IsPostBack) {
                RPUsers.DataSource = listaUsuariosProj;
                RPUsers.DataBind();

                ddlPrivacyProps.Items.Add("Publico");
                ddlPrivacyProps.Items.Add("Privado");
            }
            

            ClproyectoE objProyecto = objProyectoL.mtdGetProjectById(iPr);

            LlblProjectName.Text = objProyecto.nombreProyecto;

            ScriptManager.RegisterStartupScript(this, GetType(), "SetProjId", "projectID = "+ iPr +";", true);

            string path = Server.MapPath("~/Users/Projects/" + iPr + ".json");

            if (File.Exists(path)) {

                string json = File.ReadAllText(path);



                ScriptManager.RegisterStartupScript(this, GetType(), "OcultarPanelDeLienzoCrear", "HideCreateCanvas();", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "ShowEditor", "startEditor();", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "SendJsonToJs", "currentJson = " + json + " ;", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "CallLoadReader", "loadstart();", true);
                //Crear script para aplicar tamaño del json al lienzo
                //OnResizeCanvas

                //ScriptManager.RegisterStartupScript(this, GetType(), "RedimensionarLienzoInicial", "ResizeCanvas(" + lienzox+","+lienzoy+");", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "Adaptar altura del lienzo", "setCanvasHeight();", true);

            }
            else
            {

                //aparecer panel de creación de lienzo
                ScriptManager.RegisterStartupScript(this, GetType(), "AparecerPanelDeLienzoCrear", "ShowCreateCavas();", true);
                
            }


            





            



        }

        protected void btnTop_Click(object sender, EventArgs e)
        {

            


        }

        protected void btnGenerarLienzo_Click(object sender, EventArgs e)
        {

                    

        }

        protected void btnGuardar_Click(object sender, EventArgs e)
        {

            


        }

        protected void btnAddUser_Click(object sender, EventArgs e)
        {
            string iPr = Request.QueryString["iPr"];
            //verificar que el usuario que se quiere agregar exista
            ClusuarioL objUSL = new ClusuarioL();
            int existe = objUSL.mtdCheckUserExist(txtSearchCorreo.Text);

            if (existe == 1) {

                ClProyectoL objProJL = new ClProyectoL();
                int insertres = objProJL.mtdAddUserToProject(iPr,txtSearchCorreo.Text);

                if (insertres == 1) {

                    //Mostrar alerta de usuario encontrado y agregado
                    List<ClCompartirUserInfo> listaUsuariosProj = objProJL.mtdGetAllUserInProject(iPr);

                    RPUsers.DataSource = listaUsuariosProj;
                    RPUsers.DataBind();

                }
                else
                {

                    ScriptManager.RegisterStartupScript(this, GetType(), "NoFindUser", "cantAddUser();", true);

                }

            }
            else
            {

                //mostrar Alerta de usuario no encontrado
                ScriptManager.RegisterStartupScript(this, GetType(), "NoFindUser", "cantAddUser();", true);

            }



        }

        

        

        

        protected void RPUsers_ItemCommand(object source, RepeaterCommandEventArgs e)
        {

        }

        

        protected void btnDeleteUserRp_Click1(object sender, EventArgs e)
        {

        }

        protected void btnUpdateUser_Click1(object sender, EventArgs e)
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

        protected void RPUsers_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {

        }

        protected void btnDeleteUserRp_Click(object sender, EventArgs e)
        {

            Button btnUpdate = (Button)sender;
            RepeaterItem item = (RepeaterItem)btnUpdate.NamingContainer;

            Label lblCorreo = (Label)item.FindControl("lblCorreoRp");
            string correo = lblCorreo.Text;

            ClProyectoL objProjL = new ClProyectoL();
            int res = objProjL.mtdDeleteUserOnProjectByMail(correo);


            if (res == 1) {

                string iPr = Request.QueryString["iPr"];
                ClProyectoL objProyectoL = new ClProyectoL();

                List<ClCompartirUserInfo> listaUsuariosProj = objProyectoL.mtdGetAllUserInProject(iPr);
                
                
                    RPUsers.DataSource = listaUsuariosProj;
                    RPUsers.DataBind();
                


            } 

        }

        protected void btnChangePrivacy_Click(object sender, EventArgs e)
        {
            string iPr = Request.QueryString["iPr"];
            string selected = ddlPrivacyProps.SelectedValue;
            ClProyectoL objProjL = new ClProyectoL();
            int res = objProjL.mtdUpdateVisibilityById(iPr,selected);



        }
    }
}