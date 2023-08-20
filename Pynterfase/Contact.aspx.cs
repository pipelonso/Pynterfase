﻿
using Pynterfase.Entidades;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
//using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class Contact : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack) { 
            
                ddlSolicitud.Items.Clear();
                ddlSolicitud.Items.Add("Recomendación");
                ddlSolicitud.Items.Add("Reclamo");
                ddlSolicitud.Items.Add("Problema");
                ddlSolicitud.Items.Add("Felicitaciones");


            }

            if (Session["usuario"].ToString() != null && Session["usuario"].ToString() != "")
            {

                txtMail.Text = Session["usuario"].ToString();


            }


        }

        protected void btnEnviar_Click(object sender, EventArgs e)
        {

            if (txtTitulo.Text != "")
            {

                if (txtMail.Text != "")
                {

                    if(txtMensaje.Text != "")
                    {

                        AdminL objAdminL = new AdminL();

                        if (flIMG.HasFiles)
                        {

                            List<Bitmap> listaImagenes = new List<Bitmap>();
                            int numeroelementos = flIMG.PostedFiles.Count;
                            for (int i = 0; i < numeroelementos; i++)
                            {

                                try
                                {

                                    Bitmap imagen = new Bitmap(flIMG.PostedFile.InputStream);
                                    listaImagenes.Add(imagen);

                                }
                                catch (Exception ex)
                                {

                                    Console.WriteLine(ex);
                                    //throw;
                                }





                            }


                            ClSolitudE objSolicitudE = new ClSolitudE();

                            objSolicitudE.idTipoSolicitud = 1;
                            objSolicitudE.Titulo = txtTitulo.Text;
                            objSolicitudE.Correo = txtMail.Text;
                            objSolicitudE.Mensaje = txtMensaje.Text;
                            string rutas = Server.MapPath("~/Users/Solicitudes/");

                            int res = objAdminL.mtdAddContactMessage(objSolicitudE, listaImagenes);

                            List<string> rutasimg = new List<string>(); 

                            for (int i = 0; i < flIMG.PostedFiles.Count; i++)
                            {

                                rutas = Server.MapPath("~/Users/Solicitudes/" + res + " " + i + ".png");
                                flIMG.SaveAs(rutas);
                                rutasimg.Add(rutas);

                            }

                            int resimg = objAdminL.mtdRegisterImages(listaImagenes, res, rutasimg);
                            
                            

                        }

                    }

                }

            }
             
        }
    }
}