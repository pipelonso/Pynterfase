using Pynterfase.Entidades;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class InfoUsuario : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {

            
            if (!IsPostBack)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ocultarelementos", "onhideall();", true);
                ClusuarioL objUSL = new ClusuarioL();
                ClUsuarioE objUSE = objUSL.mtdGetAllUser(Session["usuario"].ToString());
                lblUsername.Text = objUSE.nombre;
                lblMail.Text = objUSE.correo;
                imgUser.ImageUrl = objUSE.imagenUsuario;



            }
                


            


        }

        protected void ediNamebtn_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowname();", true);
            


        }

        protected void btnChangeProfPic_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
        }

        protected void btnEditPassShow_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarpass", "onshowpass();", true);
            
        }

        protected void avatarpic1_Click(object sender, ImageClickEventArgs e) 
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            string imgPath = "~/Vista/Pynterfase avatars/1.png";
            ClusuarioL objUSL = new ClusuarioL();
            int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());

            if (operacion == 1)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
            }

        }

        protected void avatarpic2_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            string imgPath = "~/Vista/Pynterfase avatars/2.png";
            ClusuarioL objUSL = new ClusuarioL();
            int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());
            if (operacion == 1)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
            }
        }

        protected void avatarpic3_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            string imgPath = "~/Vista/Pynterfase avatars/3.png";
            ClusuarioL objUSL = new ClusuarioL();
            int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());
            if (operacion == 1)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
            }
        }

        protected void avatarpic4_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            string imgPath = "~/Vista/Pynterfase avatars/4.png";
            ClusuarioL objUSL = new ClusuarioL();
            int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());
            if (operacion == 1)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
            }
        }

        protected void avatarpic5_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            string imgPath = "~/Vista/Pynterfase avatars/5.png";
            ClusuarioL objUSL = new ClusuarioL();
            int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());
            if (operacion == 1)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
            }
        }

        protected void avatarpic6_Click(object sender, ImageClickEventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            string imgPath = "~/Vista/Pynterfase avatars/6.png";
            ClusuarioL objUSL = new ClusuarioL();
            int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());
            if (operacion == 1)
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
            }
            else
            {
                ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
            }

        }

        protected void btnUploadImg_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarimagen", "onshowimg();", true);
            ClusuarioL objUSL = new ClusuarioL();

            if (FlUpimgUser.HasFile)
            {


                ClUsuarioE objUsuario = objUSL.mtdGetAllUser(Session["usuario"].ToString());


                var path = Path.Combine(Server.MapPath("~/Vista/imagenes/UserPics/" + objUsuario.IdUsuario.ToString() + ".png"));

                FlUpimgUser.SaveAs(path);


                string imgPath = "~/Vista/imagenes/UserPics/"+objUsuario.IdUsuario.ToString() + ".png";

                int operacion = objUSL.UpdatePic(imgPath, Session["usuario"].ToString());
                if (operacion == 1)
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
                }




            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "NoIMG", "NoImgUpload();", true);


            }


            



        }

        protected void btnUpdatePass_Click(object sender, EventArgs e) //Actualizar contraseña
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarpass", "onshowpass();", true);
            if (txtActualPass.Text.Trim() != "") {

                if (txtNewPass.Text.Trim() != "") {

                    if (txtrepPass.Text.Trim() != "")
                    {

                        if (txtNewPass.Text == txtrepPass.Text)
                        {

                            ClusuarioL objSUL = new ClusuarioL();
                            int correctpass = objSUL.mtdLogin(Session["usuario"].ToString(), txtActualPass.Text);

                            if (correctpass >= 1)
                            {

                                int resultado = objSUL.mtdUpdatePassword(Session["usuario"].ToString(), txtNewPass.Text);

                                if (resultado >= 1)
                                {
                                    //Proceso completado con exito
                                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);

                                    Response.Redirect("~/Login.aspx");


                                }
                                else
                                {
                                    //error inespetado
                                    ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);

                                }



                            }
                            else
                            {
                                //error contraseña incorrecta
                                ScriptManager.RegisterStartupScript(this, GetType(), "Errorpass", "errorpassword();", true);
                                //()


                            }


                        }
                        else
                        {

                            //notpassEquals()
                            ScriptManager.RegisterStartupScript(this, GetType(), "Errorreppass", "notpassEquals();", true);

                        }


                    }
                    else
                    {
                        //error de campos faltantes
                        ScriptManager.RegisterStartupScript(this, GetType(), "camposvacios", "voidall();", true);

                    }
                    

                }
                else
                {
                    //mensaje de campos faltantes
                    ScriptManager.RegisterStartupScript(this, GetType(), "camposvacios", "voidall();", true);


                }

                
            }
            else
            {
                //mensaje de campos faltantes
                ScriptManager.RegisterStartupScript(this, GetType(), "camposvacios", "voidall();", true);

            }
            

        }

        protected void btnEnviarNombre_Click(object sender, EventArgs e) //Enviar nombre al para actualizarlo en la base de de datos
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "mostrarname", "onshowname();", true);

            if (txtName.Text.Trim() != "" || txtName.Text != "") {

                ClusuarioL objUSL = new ClusuarioL();
                int resultado = objUSL.mtdUpdateName(txtName.Text, Session["usuario"].ToString());

                if (resultado == 1)
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Erroralert", "Errorgen();", true);
                }


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "camposvacios", "voidall();", true);

            }



        }

        protected void btnCerrarSesion_Click(object sender, EventArgs e)
        {

            Session["usuario"] = "";
            Response.Redirect("~/Inicio.aspx");



        }
    }
}