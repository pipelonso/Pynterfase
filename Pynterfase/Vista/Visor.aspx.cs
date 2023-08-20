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
    public partial class Visor : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["usuario"].ToString() == null || Session["usuario"].ToString() == "")
            {

                Response.Redirect("~/Login.aspx");

            }


            ScriptManager.RegisterStartupScript(this, GetType(), "ResizeCanvas", "onResizeCambas();", true);
            string iPr = Request.QueryString["iPr"];

            if (iPr == null || iPr == "")
            {

                Response.Redirect("~/Vista/Error.aspx");

            }

            string path = Server.MapPath("~/Users/Projects/" + iPr + ".json");

            if (File.Exists(path))
            {

                string json = File.ReadAllText(path);
                ScriptManager.RegisterStartupScript(this, GetType(), "SendJsonToJs", "currentJson = " + json + " ;", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "sendID", "projectID = " + iPr + " ;", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "CallLoadReader", "loadstart();", true);


            }

            ClProyectoL objPROJL = new ClProyectoL();
            int itsSaved = objPROJL.mtdVerifyIfIsSaved(Session["usuario"].ToString(), iPr);

            if (itsSaved == 1) {

                imgsaved.ImageUrl = "~/Vista/imagenes/btnSavedOn.svg";

            }

        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            string iPr = Request.QueryString["iPr"];
            
            if (Session["usuario"].ToString() == "")
            {

                Response.Redirect("~/Login.aspx");

            }


            if (imgsaved.ImageUrl != "~/Vista/imagenes/btnSavedOn.svg") {

                ClProyectoL objPROJL = new ClProyectoL();
                ClproyectoE objPROJE = objPROJL.mtdGetProjectById(iPr);

                int res = objPROJL.mtdSaveProject(objPROJE.idUsuarioP.ToString(), Session["usuario"].ToString(), iPr);

                if (res == 1)
                {

                    imgsaved.ImageUrl = "~/Vista/imagenes/btnSavedOn.svg";

                }

            }
            else
            {

                ClusuarioL objUSL = new ClusuarioL();
                ClUsuarioE objUSE = objUSL.mtdGetAllUser(Session["usuario"].ToString());

                ClProyectoL objPROJL = new ClProyectoL();
                int res = objPROJL.mtdDeleteFromSaved(objUSE.IdUsuario.ToString(), iPr);

                if (res == 1)
                {

                    imgsaved.ImageUrl = "~/Vista/imagenes/btnSavedOff.svg";

                } 


            }
            

        }
    }
}