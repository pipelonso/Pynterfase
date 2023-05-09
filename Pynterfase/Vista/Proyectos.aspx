<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="Proyectos.aspx.cs" Inherits="Pynterfase.Vista.Proyectos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/ProjectsPanel.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="js/bootstrap.min.js"></script>
    <div class="container-fluid">
        <h4>Crear un proyecto nuevo</h4>
    <asp:Button ID="btnNewProject" runat="server" Text="CREAR NUEVO PROYECTO" CssClass="w-100 botones" OnClick="btnNewProject_Click"/>
    </div>
    
    <h1 class="m-2">Tus Proyectos</h1>
    <div class="container-fluid">
        <%--<asp:ListBox ID="lbListaProyectos" runat="server" CssClass="col-xxl-9 col-xl-8 col-lg-7 col-md-12 col-sm-12 flex-column myLista"></asp:ListBox>--%>
        
        <asp:Repeater ID="rpProyectos" runat="server" OnItemCommand="rpProyectos_ItemCommand" OnItemDataBound="rpProyectos_ItemDataBound">
            <ItemTemplate>
                <div class="projcont projbox my-2">
                    
                    <div class="navbar my-2">
                        <div class="col-sm-12 my-2 col-md-2">
                            <asp:Label ID="lblIdProyecto" runat="server" Text='<%#  Eval("IdProyecto") %>' CssClass="nav-item mx-2 my-2"></asp:Label>
                        </div>
                        <div class="col-sm-12 my-2 col-md-2">
                            <asp:Label ID="lblNombreProyecto" runat="server" Text='<%# Eval("nombreProyecto") %>' CssClass="nav-item mx-2"></asp:Label>
                        </div>
                        <div class="col-sm-12 my-2 col-md-2">
                            <asp:Label ID="lblAutor" runat="server" Text='<%# "Autor: " + Eval("nombre") %>' CssClass="nav-item mx-2 my-2"></asp:Label>
                        </div>
                        <div class="col-sm-12 my-2 col-md-2">
                            <asp:Label ID="lblVisibilidad" runat="server" Text='<%# "Visibilidad: " + Eval("visibilidad") %>' CssClass="nav-item mx-2 my-2"></asp:Label>
                        </div>
                        

                        <div class="justify-content-around">
                            <asp:Button ID="btnOpenProject" runat="server" Text="Abrir" CssClass="my-2 botones w-75" OnClick="btnOpenProject_Click"/>
                            <asp:Button ID="btnShare" runat="server" Text="Compartir" CssClass="my-2 botones w-75" />
                            <asp:Button ID="btnDelete" runat="server" Text="Eliminar" CssClass="my-2 botones w-75" />
                        </div>
                    </div>
                    
                </div>
            </ItemTemplate>
        </asp:Repeater>


        

        
        <%--<asp:Label ID="lblProjNombre" runat="server" Text="Nombre: Interfaz Flopante" CssClass="col-sm-12 col-md-12 col-xl-5 col-xxl-3"></asp:Label>--%>
        <%--<asp:Label ID="lblAutor" runat="server" Text="Autor: Reisy" CssClass="col-sm-12 col-md-12 col-xl-5 col-xxl-3 m-3"></asp:Label>--%>
        
        <br />
        <%--<asp:Button ID="btnOpenProject" runat="server" Text="Abrir Proyecto" CssClass="btn btn-primary mt-3" />
        <asp:Button ID="btnShare" runat="server" Text="Compartir" CssClass="btn btn-info mt-3" />
        <asp:Button ID="btnDelete" runat="server" Text="Eliminar" CssClass="btn btn-danger mt-3" />--%>
    </div>
</asp:Content>

