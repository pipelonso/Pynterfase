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
    public partial class forgotpasword : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ocultarelementos", "ocultarContCode();", true);

            }
            
        }

        protected void btnValidar_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "ocultarNewpass", "ocultarcontPass();", true);
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
                        ScriptManager.RegisterStartupScript(this, GetType(), "ocultarNewpass", "ocultarcontPass();", true);

                        txtCorreo.Enabled = false;
                        btnValidar.Enabled = false;

                        


                    }
                    else {

                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "FailMailsendNotification();", true);
                        ScriptManager.RegisterStartupScript(this, GetType(), "ocultarNewpass", "ocultarcontPass();", true);
                        txtPass1.Enabled = false;
                        txtPass2.Enabled = false;
                        btnChangePass.Enabled = false;


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

        protected void btnRevisarCodigo_Click(object sender, EventArgs e)
        {

            ClusuarioL objUL = new ClusuarioL();

            ClUsuarioE objUSE = objUL.mtdGetAllUser(txtCorreo.Text);

            int correcto = objUL.mtdVerificateRecuperationCode(txtCode.Text,objUSE.IdUsuario.ToString());

            if (correcto >= 1) {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
                txtCode.Enabled = false;
                btnRevisarCodigo.Enabled = false;
                ScriptManager.RegisterStartupScript(this, GetType(), "mostrarElementospass", "mostrarconPass();", true);
                txtPass1.Enabled = true;
                txtPass2.Enabled = true;
                btnChangePass.Enabled = true;


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "IncorrectCode();", true);
                txtPass1.Enabled = false;
                txtPass2.Enabled = false;
                btnChangePass.Enabled = false;


            }


        }

        protected void btnChangePass_Click(object sender, EventArgs e)
        {

            ClusuarioL objUSL = new ClusuarioL();
            if (txtPass1.Text != "") {

                if (txtPass2.Text != "") {


                    if (txtPass1.Text == txtPass2.Text) {

                        int operacion = objUSL.mtdUpdatePassword(txtCorreo.Text, txtPass1.Text);

                        if (operacion >= 1) {

                            //Operacion completada con exito
                            ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
                            Response.Redirect("~/Login.aspx");


                        }
                        else
                        {
                            //a ocurrido un error inesperado
                            ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "notpassEquals();", true);

                        }


                    }
                    else
                    {
                        //contraseñas no coinciden
                        ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "notpassEquals();", true);


                    }



                }
                else {

                    //La segunda contraseña esta vacia
                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidpassword();", true);
                    


                }

            }else {

                //La primera contraseña esta vacia
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidpassword();", true);



            }

            




        }
    }
}