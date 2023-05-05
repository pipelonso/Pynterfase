<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="InfoUsuario.aspx.cs" Inherits="Pynterfase.Vista.InfoUsuario" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
        <h1 class="container-fluid">Usuario</h1>
        <asp:Label ID="lblUsername" runat="server" Text="_username_"></asp:Label>
        <asp:Label ID="lblMail" runat="server" Text="_mail_"></asp:Label>
    </div>
    


</asp:Content>
