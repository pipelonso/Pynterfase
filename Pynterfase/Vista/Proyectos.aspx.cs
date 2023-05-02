using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pynterfase.Vista
{
    public partial class Proyectos : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {

                ClusuarioL objUserL = new ClusuarioL();
                int verificated = objUserL.mtdCheckVerification(Session["usuario"].ToString());

                if (verificated == 0)
                {

                    Response.Redirect("~/Vista/Verification.aspx");

                }

                lbListaProyectos.Items.Add("Floppa");
                lbListaProyectos.Items.Add("Cosmica");
                lbListaProyectos.Items.Add("Del universo");
                lbListaProyectos.Items.Add("Brillante");

            }



        }
    }
}