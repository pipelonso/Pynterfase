using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MailKit.Net.Smtp;
using Pynterfase.Logica;
using Pynterfase.Entidades;

namespace Pynterfase
{
    public partial class Verification : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {


            ScriptManager.RegisterStartupScript(this, GetType(), "setbig", "onstart();", true);

            if (!IsPostBack) { 
                if (Session["usuario"].ToString() != "") {
                
                    ClusuarioL objUsuarioL = new ClusuarioL();
                    objUsuarioL.mtdAddVerificationCode(Session["usuario"].ToString());
                    ClUsuarioE objUsuarioE = objUsuarioL.mtdGetAllUser(Session["usuario"].ToString());
                    ClVerificacionE objVerificationE = objUsuarioL.mtdGetVerificationCode(Session["usuario"].ToString());


                    string correo = Session["usuario"].ToString();
                    string asunto = "¡HOLA! Verifique su correo electronico";
                    string cuerpo = "Hola este es su codigo de verificación de correo electronico \n " + objVerificationE.codigo;
                    
                    MailManager mailManager = new MailManager();
                    mailManager.mtdsendMail(objUsuarioE.nombre , correo , asunto , cuerpo);





                }
                else
                {

                    Response.Redirect("~/Login.aspx");

                }
            }





        }

        protected void btnVerificar_Click(object sender, EventArgs e)
        {

            ClusuarioL objUsarioL = new ClusuarioL();
            int res = objUsarioL.mtdValidateVerification(txtCodigo.Text);

            if (res == 0)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "NotCode", "IncorrectCode();", true);

            }
            else {

                Response.Redirect("~/Vista/Proyectos.aspx");
                        
            }




        }
    }
}