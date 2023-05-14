using Pynterfase.Entidades;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class Create : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            ddlVisibilidad.Items.Add("Publico");
            ddlVisibilidad.Items.Add("Privado");



        }

        protected void btnCrear_Click(object sender, EventArgs e)
        {

            if (txtName.Text.Trim() != "") {

                ClProyectoL objProyectoL = new ClProyectoL();
                ClproyectoE objProyectoE = new ClproyectoE();
                ClusuarioL objUSL = new ClusuarioL();
                ClUsuarioE objUSE = objUSL.mtdGetAllUser(Session["usuario"].ToString());
                objProyectoE.nombreProyecto = txtName.Text;
                objProyectoE.idUsuarioP = objUSE.IdUsuario;
                objProyectoE.visibilidad = ddlVisibilidad.SelectedValue;
                int res = objProyectoL.mtdAddProject(objProyectoE);

                if (res == 1) {

                    //Crear consulta del elemento creado para poder mandar el id por la url
                    ClproyectoE newProyectoE = objProyectoL.mtdGetRecentProjectIdByMail(Session["usuario"].ToString());
                    int idProyecto = newProyectoE.IdProyecto;
                    //Response.Redirect("~/Vista/Editor.aspx");
                    Response.Redirect("~/Vista/Editor.aspx?iPr=" + idProyecto);
                }
                else
                {
                    ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "Errorgen();", true);
                    //Mensaje de error

                }



            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "Popup", "voidall();", true);


            }


            

            




        }
    }
}