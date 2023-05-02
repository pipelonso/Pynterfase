using Org.BouncyCastle.Crmf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

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
           

                HtmlGenericControl myDiv = new HtmlGenericControl("div");
                myDiv.ID = "myDiv";
                myDiv.Attributes.Add("class", "bg-primary");
                myDiv.Attributes.Add("style", "position: absolute; left: 100px; top: 100px; width:100px; border-style:solid; border-color : black; border-radius: 5px; border-width : 2px;");
                myDiv.InnerHtml = "Contenido del div";

                HtmlGenericControl lienzoDiv = (HtmlGenericControl)FindControl("lienzo");
                lienzoDiv.Controls.Add(myDiv);


                myDiv.Style["top"] = "10px";


           
            



        }

        protected void btnTop_Click(object sender, EventArgs e)
        {

            HtmlGenericControl myDiv = (HtmlGenericControl)FindControl("myDiv");

            string currentTopStyle = myDiv.Style["Top"];
            string currenttopnumtext = currentTopStyle.Replace("p"," ").Replace("x"," ").Trim();
            int currentTop = int.Parse(currenttopnumtext) + 5;


            myDiv.Style["Top"] = currentTop + "px";


        }
    }
}