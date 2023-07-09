<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Create.aspx.cs" Inherits="Pynterfase.Vista.Create" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="mycss/create.css" rel="stylesheet" />
    <script src="alertManager.js"></script>
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="m-2">
            <h5 class="text-white titlediv">Crear proyecto nuevo</h5>
        </div>
        <div class="navbar">

            <div class="text-white col-12 contproject col-lg-5 col-md-12 col-sm-12 nav-item">
                <div class="mx-2">

                    <p>Nombre de tu proyecto</p>
                    <asp:TextBox runat="server" placeholder=" Nombre" CssClass="w-100 txtcajas" ID="txtName"></asp:TextBox>

                    <p>Quieres que tu proyecto sea</p>

                    <asp:DropDownList ID="ddlVisibilidad" runat="server" CssClass="w-100 txtcajas"></asp:DropDownList>

                    <asp:Button ID="btnCrear" runat="server" Text="CREAR PROYECTO" CssClass="w-100 botones my-5" OnClick="btnCrear_Click" />

                </div>
            </div>

            <div class="nav-item col-12 col-lg-6 col-md-12 col-sm-12 mx-1 textoanim">

                <h3 class="w-100 text-white">Aqui comienza una nueva aventura</h3>
                <div>
                    <img src="imagenes/hexagon.svg" alt="Hexagono" style="position:relative; top:50px; z-index:-1; height : 300px;" class="girar" />
                    <img src="imagenes/tkWindow.png" alt="Tkwindow" style="position:relative; left:-100px; z-index:-2;"/>
                </div>
                
            </div>



        </div>



    </div>

    <script src="../Scripts/sweetalert.min.js"></script>
</asp:Content>
