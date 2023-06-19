<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Visor.aspx.cs" Inherits="Pynterfase.Vista.Visor" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="mycss/Visor.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid ">

        <h4 class="text-white my-2   " style="background-image: url('imagenes/OnBar.svg'); padding: 10px; border-radius: 5px; animation: fadeInUp; animation-duration: 1s;">Visualizar Proyecto</h4>

    </div>
    <div class="container-fluid">

        <div class="navbar">

            <div style="overflow: auto; border:solid; border-color : wheat;" class="nav-item col-sm-12 col-12 col-md-6 col-lg-6" id="limiteslienzo">
                <%-- Maldito lienzo --%>
                <div class=" canvas" id="lienzo">


                </div>

            </div>
            <div class="nav-item col-sm-12 col-12 col-md-4 col-lg-4 p-2">
                <textarea class="outputbox w-100" id="txtpyGenerated" >  </textarea>
            </div>
            

            <div class="nav-item container-fluid col-sm-12 col-12 col-md-2 col-lg-2"> 
                <asp:LinkButton ID="btnSave" CssClass="text-decoration-none text-white" runat="server" OnClick="btnSave_Click">
                    <asp:Image ID="imgsaved" runat="server" ImageUrl="~/Vista/imagenes/btnSavedOff.svg" Height="30px" Width="30px"/>
                    Guardar</asp:LinkButton>
                <%--<input type="button" name="name" value="" id="btnSave" class="w-100 my-2" />--%>
                <input type="button" name="name" value="Generar codigo" class="w-100 my-2 botones" onclick="GeneratePython();"/>
                <input type="button" name="name" value="Descargar" class="w-100 my-2 botones" onclick="DownLoad();" />



            </div>


        </div>

    </div>





    <link href="../Content/animate.css" rel="stylesheet" />
    <script src="Visor.js"></script>
    <script src="js/bootstrap.min.js"></script>
</asp:Content>
