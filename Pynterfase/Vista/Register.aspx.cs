using Pynterfase.Datos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Pynterfase.Logica;
using Pynterfase.Entidades;

namespace Pynterfase
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {


            if (txtEmail.Text == "" || txtName.Text == "" || txtPassword.Text == "" || txtRepPassword.Text == "")
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidall();", true);

            }
            else if (txtPassword.Text == txtRepPassword.Text)
            {
                
                ClusuarioL objUsuarioL = new ClusuarioL();

                int exist = objUsuarioL.mtdCheckUserExist(txtEmail.Text);

                if (exist == 0)
                {

                    ClUsuarioE objUsuarioE = new ClUsuarioE();
                    objUsuarioE.correo = txtEmail.Text;
                    objUsuarioE.nombre = txtName.Text;

                    //FALTA VALIDACION DE CONTRASEÑA DOBLE
                    //FALTAN MUCHAS VERIFICACIONES 
                    //CONSULTAR EXISTENCIA DE USUARIO
                    //CONSULTAR CAMPOS VACIOS

                    objUsuarioE.password = txtPassword.Text;

                    objUsuarioL.mtdRegister(objUsuarioE);

                    Session["usuario"] = txtEmail.Text;
                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "successalert();", true);
                    Response.Redirect("~/Vista/Proyectos.aspx");

                    


                }
                else {

                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "AlreadyExistUser();", true);

                }

            }
            else {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "notpassEquals();", true);
                


            }
            

        }
    }
}