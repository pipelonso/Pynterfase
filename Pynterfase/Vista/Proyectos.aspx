<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Proyectos.aspx.cs" Inherits="Pynterfase.Vista.Proyectos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/ProjectsPanel.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="js/bootstrap.min.js"></script>
    <h1 class="m-2">Tus Proyectos</h1>
    <div class="container-fluid">
        <asp:ListBox ID="lbListaProyectos" runat="server" CssClass="col-xxl-9 col-xl-8 col-lg-7 col-md-12 col-sm-12 flex-column myLista"></asp:ListBox>
        
        
        <asp:Label ID="lblProjNombre" runat="server" Text="Nombre: Interfaz Flopante" CssClass="col-sm-12 col-md-12 col-xl-5 col-xxl-3"></asp:Label>
        <asp:Label ID="lblAutor" runat="server" Text="Autor: Reisy" CssClass="col-sm-12 col-md-12 col-xl-5 col-xxl-3 m-3"></asp:Label>
        
        <br />
        <asp:Button ID="btnOpenProject" runat="server" Text="Abrir Proyecto" CssClass="btn btn-primary mt-3" />
        <asp:Button ID="btnShare" runat="server" Text="Compartir" CssClass="btn btn-info mt-3" />
        <asp:Button ID="btnDelete" runat="server" Text="Eliminar" CssClass="btn btn-danger mt-3" />
    </div>
</asp:Content>

