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

            ddlPrivacyProps.Items.Add("Publico");
            ddlPrivacyProps.Items.Add("Privado");

            


            
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

            RPUsers.DataSource = listaUsuariosProj;
            RPUsers.DataBind();

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

            }
            else
            {

                //mostrar Alerta de usuario no encontrado

            }



        }

        

        

        protected void btnUpdateUser_Click(object sender, EventArgs e)
        {

            Button chkEditableUser = (Button)sender;
            Repeater item = (Repeater)chkEditableUser.NamingContainer;

            Label lblCorreo = (Label)FindControl("lblCorreoRp");

            string correo = lblCorreo.Text;

        }

        protected void RPUsers_ItemCommand(object source, RepeaterCommandEventArgs e)
        {

        }

        

        protected void btnDeleteUserRp_Click1(object sender, EventArgs e)
        {

        }
    }
}