<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="InfoUsuario.aspx.cs" Inherits="Pynterfase.Vista.InfoUsuario" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="mycss/InfoUser.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
        <div class="container-fluid">
            <h1 class="">Usuario</h1>
            
            <div class="navbar col-lg-6 col-md-10 col-sm-12 infouserbox">
                <div class="nav-item mx-3">
                    <asp:Label ID="lblUsername" runat="server" Text="_username_"></asp:Label>
                    <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/Vista/imagenes/pencil-fill.svg" CssClass="Editbnt"/>
                    <br />
                    <asp:Label ID="lblMail" runat="server" Text="_mail_"></asp:Label>

                </div>
                <asp:Image ID="imgUser" runat="server" CssClass="nav-item userpicture m-2" ImageUrl="~/Vista/imagenes/UserPics/24331490_4800_1_05.jpg"/>
                
            </div>
        


        </div>
        

    </div>
    


</asp:Content>
