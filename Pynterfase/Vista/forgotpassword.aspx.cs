using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Pynterfase.Logica;


namespace Pynterfase.Vista
{
    public partial class forgotpasword : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "ocultarelementos", "ocultarContCode();", true);
        }

        protected void btnValidar_Click(object sender, EventArgs e)
        {
           
            if (txtCorreo.Text.Trim() != "")
            {
                ClusuarioL objUSL = new ClusuarioL();
                int existecorreo = objUSL.mtdCheckUserExist(txtCorreo.Text);

                if (existecorreo == 1)
                {

                    ClRandomCodeGen objCodeGen = new ClRandomCodeGen();
                    string codigorandom = objCodeGen.mtdRandomCodeGen();




                    MailManager mailManager = new MailManager();
                    string nombre = "";
                    string correo = txtCorreo.Text.Trim();
                    string asunto = "Sistema de restablecimiento de contraseñas PYNTERFASE";
                    string cuerpo = "Codigo de recuperación es: " + codigorandom;

                    mailManager.mtdsendMail(nombre , correo , asunto , cuerpo);

                    int addcodigo = objUSL.mtdRecuperacionPass(correo, codigorandom);

                    if (addcodigo >= 1)
                    {

                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "MailsendNotification();", true);
                        ScriptManager.RegisterStartupScript(this, GetType(), "mostrarElementos", "mostrarContCode();", true);
                        txtCorreo.Enabled = false;
                        btnValidar.Enabled = false;

                    }
                    else {

                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "FailMailsendNotification();", true);

                    }


                }
                else
                {

                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "UserNotFound();", true);

                }


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidmail();", true);

            }
            
           


        }
    }
}