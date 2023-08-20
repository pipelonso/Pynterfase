using Pynterfase.Datos;
using Pynterfase.Entidades;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Windows;


namespace Pynterfase.Vista
{
    public partial class Proyectos : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {





            if (!IsPostBack)
            {

                if (Session["usuario"].ToString() == null || Session["usuario"].ToString() == "") {

                    Response.Redirect("~/Login.aspx");
                    


                }
                else
                {

                    ClusuarioL objUserL = new ClusuarioL();
                    int verificated = objUserL.mtdCheckVerification(Session["usuario"].ToString());

                    if (verificated == 0)
                    {

                        Response.Redirect("~/Vista/Verification.aspx");

                    }
                    else
                    {

                        ClusuarioD objUSD = new ClusuarioD();
                        ClUsuarioE objUDE = objUSD.mtdGetAllUser(Session["usuario"].ToString());

                        ClProyectoL objProjL = new ClProyectoL();
                        List<ClproyectoE> ListaProyectos = objProjL.mtdGetAllByUser(objUDE.IdUsuario.ToString());

                        rpProyectos.DataSource = ListaProyectos;
                        rpProyectos.DataBind();
                        
                    }




                }

                

                

            }



        }

        protected void btnOpenProject_Click(object sender, EventArgs e)
        {

            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblIdProyecto = (Label)item.FindControl("lblIdProyecto");
            int idProyecto = Convert.ToInt32(lblIdProyecto.Text);

            Session["retorno"] = "proj";

            Response.Redirect("~/Vista/Editor.aspx?iPr=" + idProyecto);

        }

        protected void rpProyectos_ItemCommand(object source, RepeaterCommandEventArgs e)
        {

        }

        protected void rpProyectos_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            




        }

        protected void btnNewProject_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Vista/Create.aspx");
        }

        protected void btnShare_Click(object sender, EventArgs e)
        {

            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblIdProyecto = (Label)item.FindControl("lblIdProyecto");
            int idProyecto = Convert.ToInt32(lblIdProyecto.Text);

            string url = "http://localhost:59366/Vista/Editor.aspx?iPr=" + idProyecto;

            ScriptManager.RegisterStartupScript(this, GetType(), "CallLoadReader", "SetClipboard('"+url+"');", true);



        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {

            Button btn = (Button)sender;
            RepeaterItem item = (RepeaterItem)btn.NamingContainer;
            Label lblIdProyecto = (Label)item.FindControl("lblIdProyecto");
            int idProyecto = Convert.ToInt32(lblIdProyecto.Text);

            ClProyectoL projL = new ClProyectoL();
            int res = projL.mtdDeleteProjectKiller(idProyecto.ToString());

            if (res < 1)
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionFailed", "Errorgen();", true);               

            }
            else
            {

                ScriptManager.RegisterStartupScript(this, GetType(), "ActionSuccess", "successalert();", true);

                ClusuarioD objUSD = new ClusuarioD();
                ClUsuarioE objUDE = objUSD.mtdGetAllUser(Session["usuario"].ToString());

                ClProyectoL objProjL = new ClProyectoL();
                List<ClproyectoE> ListaProyectos = objProjL.mtdGetAllByUser(objUDE.IdUsuario.ToString());

                rpProyectos.DataSource = ListaProyectos;
                rpProyectos.DataBind();


            }


        }
    }
}