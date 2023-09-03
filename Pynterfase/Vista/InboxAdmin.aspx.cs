using Pynterfase.Entidades;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class InboxAdmin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["usuario"].ToString() == null || Session["usuario"].ToString() == "")
            {

                Response.Redirect("~/Login.aspx");

            }


            ClusuarioL objUSL = new ClusuarioL();
            ClProyectoL objProjL = new ClProyectoL();
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

                ClSolicitudL objSolicitud = new ClSolicitudL();
                List<ClTipoSolicitudE> ListaTiposSolicitudes = objSolicitud.GetAllTipoSolicitud();

                ddlTiposSolicitud.DataSource = ListaTiposSolicitudes;
                ddlTiposSolicitud.DataValueField = "idTipoSolicitud";
                ddlTiposSolicitud.DataTextField = "Nombre";
                ddlTiposSolicitud.DataBind();

                List<ClSolitudE> ListaSolicitudes = objSolicitud.mtdGetAllSolicitudes();
                rpSolicitudes.DataSource = ListaSolicitudes;
                rpSolicitudes.DataBind();
            }




        }

        protected void btnOpenMessage_Click(object sender, EventArgs e)
        {
            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblId = (Label)item.FindControl("lblidSolicitud");

            ClSolicitudL objSolicitud = new ClSolicitudL();
            ClSolitudE objSolicitudE = objSolicitud.mtdGetSolicitudWithId(int.Parse(lblId.Text));

            lblTituloBases.Text = objSolicitudE.Titulo;
            lblCorreoBase.Text = objSolicitudE.Correo;
            lblMensajeBase.Text = objSolicitudE.Mensaje;
            txtCorreo.Text = objSolicitudE.Correo;

            ClImagenSolicitudE objIMGPost = objSolicitud.mtdGetPostImage(int.Parse(lblId.Text));
            
            if (objIMGPost.Ruta != "")
            {

                imgPost.ImageUrl = objIMGPost.Ruta;

            }



        }

        protected void btnDeleteMensaje_Click(object sender, EventArgs e)
        {

            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblId = (Label)item.FindControl("lblidSolicitud");

            ClSolicitudL objSolicitud = new ClSolicitudL();
            int res = objSolicitud.mtdDeleteSolicitud(int.Parse(lblId.Text));

            if (res >= 1)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);
                List<ClSolitudE> ListaSolicitudes = objSolicitud.mtdGetAllSolicitudes();
                rpSolicitudes.DataSource = ListaSolicitudes;
                rpSolicitudes.DataBind();

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);

            }



        }

        protected void ddlTiposSolicitud_SelectedIndexChanged(object sender, EventArgs e)
        {
            ClSolicitudL objSolicitudL = new ClSolicitudL();
            List<ClSolitudE> ListaSolicitudes = objSolicitudL.mtdGetAllSolicitudesbyidTipo(int.Parse(ddlTiposSolicitud.SelectedValue));

            rpSolicitudes.DataSource = ListaSolicitudes;
            rpSolicitudes.DataBind();
        }

        protected void btnSendMail_Click(object sender, EventArgs e)
        {
            if (txtAsunto.Text != "")
            {
                if (txtCorreo.Text != "")
                {

                    if (txtMailMessage.Text != "")
                    {

                        MailManager mailManager = new MailManager();
                        string nombre = "";
                        string correo = txtCorreo.Text.Trim();
                        string asunto = txtAsunto.Text;
                        string cuerpo = txtMailMessage.Text;

                        mailManager.mtdsendMail(nombre, correo, asunto, cuerpo);

                        ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

                    }

                }
                else
                {

                    ScriptManager.RegisterStartupScript(this, GetType(), "camposfaltantes", "voidall();", true);

                }


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "camposfaltantes", "voidall();", true);

            }
        }


    }
}