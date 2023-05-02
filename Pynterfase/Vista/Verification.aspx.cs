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

            
            if (!IsPostBack) { 
                if (Session["usuario"].ToString() != "") {
                
                    ClusuarioL objUsuarioL = new ClusuarioL();
                    objUsuarioL.mtdAddVerificationCode(Session["usuario"].ToString());
                    ClUsuarioE objUsuarioE = objUsuarioL.mtdGetAllUser(Session["usuario"].ToString());
                    ClVerificacionE objVerificationE = objUsuarioL.mtdGetVerificationCode(Session["usuario"].ToString());
                    


                    var mailmessage = new MimeMessage();

                    mailmessage.From.Add(new MailboxAddress("Pynterfase","afibanez7@misena.edu.co"));
                    mailmessage.To.Add(new MailboxAddress(objUsuarioE.nombre, Session["usuario"].ToString()));
                    mailmessage.Subject = "Verificación de correo";
                    mailmessage.Body = new TextPart()
                    {
                    Text = "HOLA! Este es tu codigo de verificación "+objVerificationE.codigo+""
                    };

                    using (var smtpClient = new SmtpClient()) {

                    smtpClient.Connect("smtp.gmail.com",465,true);
                    smtpClient.Authenticate("afibanez7@misena.edu.co","oscar y erizo3");
                    smtpClient.Send(mailmessage);
                    smtpClient.Disconnect(true);

                
                }
            
            }
            }





        }

        protected void btnVerificar_Click(object sender, EventArgs e)
        {

            ClusuarioL objUsarioL = new ClusuarioL();
            int res = objUsarioL.mtdValidateVerification(txtCodigo.Text);

            if (res == 0)
            {



            }
            else {

                Response.Redirect("~/Vista/Proyectos.aspx");
            
            
            }




        }
    }
}