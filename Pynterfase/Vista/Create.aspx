<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Create.aspx.cs" Inherits="Pynterfase.Vista.Create" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="mycss/create.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="titlediv container-fluid">
            <h5 class="text-white my-3">Crear proyecto nuevo</h5>
        </div>
        <div class="navbar">

            <div class="contproject col-lg-5 col-md-5 col-sm-12 nav-item">

                <p>Nombre de tu proyecto</p>
                <asp:TextBox runat="server" placeholder=" Nombre" CssClass="w-100 txtcajas" ID="txtName"></asp:TextBox>

                <p>Quieres que tu proyecto sea</p>

                <asp:DropDownList ID="ddlVisibilidad" runat="server" CssClass="w-100 txtcajas"></asp:DropDownList>

            </div>

            <div class="nav-item col-lg-6 col-md-12 col-sm-12 h-75">
                <asp:Button ID="btnCrear" runat="server" Text="CREAR PROYECTO" CssClass="w-100 botones" OnClick="btnCrear_Click" />
            </div>

        </div>



    </div>


</asp:Content>
