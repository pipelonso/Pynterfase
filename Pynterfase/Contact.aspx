<%@ Page Title="" Language="C#" MasterPageFile="~/Principal.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="Pynterfase.Vista.Contact" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Content/animate.css" rel="stylesheet" />
    <link href="Vista/css/bootstrap.min.css" rel="stylesheet" />
    <link href="Vista/mycss/Contact.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="p-2 text-white">
        <div class="bg-dark p-2 rounded-3">
            <h2>Contacto</h2>
            <p>Tienes algun problema, queja o sugerencia? Puedes completar la siguiente encuesta y tu caso sera revisado pronto.</p>
        </div>
        
        <div class="my-2 bg-dark p-2 rounded-3">
            <p>Titulo del asunto</p> 
            <asp:TextBox ID="txtTitulo" runat="server" placeholder="Titulo" CssClass="w-100 txtcajas"></asp:TextBox>              
            <hr />
            <p>Correo Electronico :: Se usara para contactarte por correo</p>
            <asp:TextBox ID="txtMail" runat="server" placeholder="Correo" TextMode="Email" CssClass="w-100 txtcajas"></asp:TextBox>
            <hr />
            <p>Tipo de solicitud</p>
            <asp:DropDownList ID="ddlSolicitud" runat="server" CssClass="w-100 txtcajas"></asp:DropDownList>
            <hr />
            <p>Mensaje :: Expecifica tu caso, solicitud o queja</p>
            <asp:TextBox ID="txtMensaje" runat="server" TextMode="MultiLine" placeholder="Tu mensaje aqui" CssClass="w-100 txtcajas"></asp:TextBox>
            <hr />
            <asp:FileUpload ID="flIMG" runat="server" AllowMultiple="True" CssClass="w-100 txtcajas" ValidateRequestMode="Disabled" />
            

            
            <hr />
            <asp:Button ID="btnEnviar" runat="server" Text="ENVIAR" CssClass="isbtn w-100" OnClick="btnEnviar_Click"/>
        </div>

    </div>   
</asp:Content>
