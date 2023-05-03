using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MailKit.Net.Smtp;
using MimeKit;
using Pynterfase.Entidades;


namespace Pynterfase.Logica
{
    public class MailManager
    {

        public void mtdsendMail(string nombre, string correo , string asunto, string cuerpo) {


            var mailmessage = new MimeMessage();

            mailmessage.From.Add(new MailboxAddress("Pynterfase", "afibanez7@misena.edu.co"));
            mailmessage.To.Add(new MailboxAddress(nombre, correo));
            mailmessage.Subject = asunto;
            mailmessage.Body = new TextPart()
            {
                //Text = "HOLA! Este es tu codigo de verificación " + objVerificationE.codigo + ""
                Text = cuerpo
            };

            using (var smtpClient = new SmtpClient())
            {

                smtpClient.Connect("smtp.gmail.com", 465, true);
                smtpClient.Authenticate("afibanez7@misena.edu.co", "oscar y erizo3");
                smtpClient.Send(mailmessage);
                smtpClient.Disconnect(true);


            }



        }


    }
}