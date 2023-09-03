<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="InboxAdmin.aspx.cs" Inherits="Pynterfase.Vista.InboxAdmin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="mycss/inboxAdmin.css" rel="stylesheet" />
    <link href="../Content/animate.min.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="p-2 text-white">
        <h1 class="m-2 text-white " style="background-image: url('imagenes/OnBar.svg'); padding: 10px; border-radius: 5px; animation: fadeInUp; animation-duration: 1s;">REVISIÓN DE SOLICITUDES</h1>
    </div>
    <div class="p-2">
        <div class="border-3 bg-dark p-2 rounded-2 navbar w-50" style="position: relative">
            <asp:DropDownList runat="server" ID="ddlTiposSolicitud" CssClass="botones bg-dark nav-item w-75" AutoPostBack="true" OnSelectedIndexChanged="ddlTiposSolicitud_SelectedIndexChanged"></asp:DropDownList>
            <asp:ImageButton ID="imgbtnClearSearch" runat="server" ImageUrl="~/Vista/imagenes/x-circle.svg" CssClass="mx-2" />
        </div>

        <div class="navbar">
            <div class="nav-item p-2 my-2 col-12 col-sm-12 col-md-6 col-lg-6" style="border-right: solid; border-color: gray; border-width: 1px; overflow: auto" id="SelectPanel">
                <asp:Repeater ID="rpSolicitudes" runat="server">
                    <ItemTemplate>
                        <div class="text-white">
                            <div class="p-2 my-2" style="border: solid; border-radius: 5px; background-image: url('imagenes/backselection.svg'); background-size: cover; border-width: 1px;">
                                <asp:Label ID="lblidSolicitud" runat="server" Text='<%# Eval("idSolicitud") %>' Visible="false"></asp:Label>
                                <div class="my-2 p-2 w-100 bg-dark rounded-2">
                                    <asp:Label ID="lblTitulo" runat="server" Text='<%# Eval("Titulo") %>'></asp:Label>
                                </div>
                                <hr />
                                <div class="navbar">
                                    <div class="nav-item">
                                        <asp:Label ID="lblCorreo" runat="server" Text='<%# Eval("Correo") %>'></asp:Label>
                                    </div>
                                    <div class="nav-item navbar">
                                        <asp:Button ID="btnOpenMessage" runat="server" Text="INSPECCIONAR" CssClass="botones nav-item mx-2" OnClick="btnOpenMessage_Click" />
                                        <asp:Button ID="btnDeleteMensaje" runat="server" Text="ELIMINAR" CssClass="botones nav-item mx-2" OnClick="btnDeleteMensaje_Click"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ItemTemplate>
                </asp:Repeater>
            </div>
            <div class="text-white nav-item p-2 my-2 col-12 col-sm-12 col-md-6 col-lg-6" id="messageViewer" style="overflow:auto">
                <asp:Label ID="lblTituloBases" runat="server" Text="---" Font-Size="30px"></asp:Label>
                <hr />
                <p>Correo de Identificación</p>
                <asp:Label ID="lblCorreoBase" runat="server" Text="---"></asp:Label>
                <hr />
                <asp:Label ID="lblMensajeBase" runat="server" Text="---"></asp:Label>
                <hr />
                <asp:Image ID="imgPost" runat="server" CssClass="w-100"/>

                <br />

                <h5>Responder con un correo</h5>
                <hr />

                <p>Asunto</p>
                <asp:TextBox ID="txtAsunto" runat="server" placeholder="Asunto" CssClass="txtcajas"></asp:TextBox>
                <hr />
                <p>Correo de envio</p>
                <asp:TextBox ID="txtCorreo" runat="server" Enabled="false" CssClass="txtcajas"></asp:TextBox>
                <p>Mensaje</p>
                <asp:TextBox ID="txtMailMessage" runat="server" CssClass="txtcajas" TextMode="MultiLine"></asp:TextBox>
                <br />
                <asp:Button ID="btnSendMail" runat="server" Text="ENVIAR" CssClass="botones my-3" OnClick="btnSendMail_Click"/>

            </div>
        </div>


    </div>

    <script src="inboxAdmin.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="alertManager.js"></script>
    <script src="../Scripts/sweetalert.min.js"></script>
</asp:Content>
