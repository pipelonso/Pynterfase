using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {





        }

        protected void btnIngresar_Click(object sender, EventArgs e)
        {

            if (txtEmail.Text != "") { 
            
                if (txtPassword.Text != "")  {
                    ClusuarioL objUsuarioL = new ClusuarioL();
                    int existe = objUsuarioL.mtdLogin(txtEmail.Text, txtPassword.Text);

                    if (existe == 1) {

                        Session["usuario"] = txtEmail.Text;
                        Response.Redirect("~/Vista/Proyectos.aspx");


                    }


                }
                else
                {

                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidpassword();", true);

                }


            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidmail();", true);

            }




        }
    }
}