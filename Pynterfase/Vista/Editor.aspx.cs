using Org.BouncyCastle.Crmf;
using Pynterfase.Logica;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Text.Json;
using Pynterfase.TkElements;
using Pynterfase.Entidades;


namespace Pynterfase.Vista
{
    public partial class Editor : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Button myButton = new Button();
            //myButton.ID = "myButton";
            //myButton.Text = "Haz clic aquí";
            ////myButton.Click += new EventHandler(myButton_Click);
            //Form.Controls.Add(myButton);
            //startsall
            ScriptManager.RegisterStartupScript(this, GetType(), "OcultarPanelDeLienzoEditar", "CloseEditWindowSizePanel();", true);
            ScriptManager.RegisterStartupScript(this, GetType(), "HideEditor", "startsall();", true);
            

            string iPr = Request.QueryString["iPr"];
            ClProyectoL objProyectoL = new ClProyectoL();
            ClproyectoE objProyecto = objProyectoL.mtdGetProjectById(iPr);

            LlblProjectName.Text = objProyecto.nombreProyecto;



            string path = Server.MapPath("~/Users/Projects/" + iPr + ".json");

            if (File.Exists(path)) {

                string json = File.ReadAllText(path);
                //leer dimesiones del lienzo

                var options = new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                };
                
                var data = JsonSerializer.Deserialize<Receptor>(json, options);

                string lienzox = data.listalienzo[0].xz;
                string lienzoy = data.listalienzo[0].yz;
                ScriptManager.RegisterStartupScript(this, GetType(), "OcultarPanelDeLienzoCrear", "HideCreateCanvas();", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "ShowEditor", "startEditor();", true);
                //Crear script para aplicar tamaño del json al lienzo
                //OnResizeCanvas
                ScriptManager.RegisterStartupScript(this, GetType(), "RedimensionarLienzoInicial", "ResizeCanvas(" + lienzox+","+lienzoy+");", true);
                ScriptManager.RegisterStartupScript(this, GetType(), "Adaptar altura del lienzo", "setCanvasHeight();", true);

            }
            else
            {

                //aparecer panel de creación de lienzo
                ScriptManager.RegisterStartupScript(this, GetType(), "AparecerPanelDeLienzoCrear", "ShowCreateCavas();", true);




            }


            





            //HtmlGenericControl myDiv = new HtmlGenericControl("div");
            //myDiv.ID = "myDiv";
            //myDiv.Attributes.Add("class", "bg-primary");
            //myDiv.Attributes.Add("style", "position: absolute; left: 100px; top: 100px; width:100px; border-style:solid; border-color : black; border-radius: 5px; border-width : 2px;");
            //myDiv.InnerHtml = "Contenido del div";

            //HtmlGenericControl lienzoDiv = (HtmlGenericControl)FindControl("lienzo");
            //lienzoDiv.Controls.Add(myDiv);


            //myDiv.Style["top"] = "10px";


            //La linea de abajo obtiene el id del proyecto
            //int idProyecto = Convert.ToInt32(Request.QueryString["iPr"]);



        }

        protected void btnTop_Click(object sender, EventArgs e)
        {

            //HtmlGenericControl myDiv = (HtmlGenericControl)FindControl("myDiv");

            //string currentTopStyle = myDiv.Style["Top"];
            //string currenttopnumtext = currentTopStyle.Replace("p"," ").Replace("x"," ").Trim();
            //int currentTop = int.Parse(currenttopnumtext) + 5;


            //myDiv.Style["Top"] = currentTop + "px";


        }

        protected void btnGenerarLienzo_Click(object sender, EventArgs e)
        {

            if (txtAlto.Text.Trim() != "") {

                if (txtAncho.Text.Trim() != "") {

                    Proyecto objProyecto = new Proyecto();
                    List<Lienzo> listalienzo = new List<Lienzo>();

                    Lienzo objlienzo = new Lienzo();
                    objlienzo.xz = txtAncho.Text;
                    objlienzo.yz = txtAlto.Text;
                    objlienzo.geometry = txtAlto.Text + "X" + txtAncho.Text;


                    listalienzo.Add(objlienzo);

                    objProyecto.listalienzo = listalienzo;

                    string iPr = Request.QueryString["iPr"];

                    string json = JsonSerializer.Serialize(objProyecto);
                    string rutaarchivo = Server.MapPath("~/Users/Projects/" + iPr + ".json");
                    StreamWriter escritor = new StreamWriter(rutaarchivo);
                    escritor.Write(json);
                    escritor.Close();


                }

            }         

        }
    }
}