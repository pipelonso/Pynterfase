<%@ Page Title="" Language="C#" MasterPageFile="~/ProjectsContent.Master" AutoEventWireup="true" CodeBehind="InfoUsuario.aspx.cs" Inherits="Pynterfase.Vista.InfoUsuario" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="mycss/InfoUser.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
        <div class="container-fluid">
            <h1 class="">Usuario</h1>
            <div class="navbar">
                <div class="navbar col-lg-6 col-md-12 col-sm-12 infouserbox nav-item mx-1 my-2" id="userbox">
                    <div class="nav-item mx-3">
                        <asp:Label ID="lblUsername" runat="server" Text="_username_" CssClass="my-2"></asp:Label>
                        <asp:ImageButton ID="ediNamebtn" runat="server" ImageUrl="~/Vista/imagenes/pencil-fill.svg" CssClass="Editbnt my-2" OnClick="ediNamebtn_Click" />
                        <br />
                        <asp:Label ID="lblMail" runat="server" Text="_mail_" CssClass="my-2"></asp:Label>
                        <br />
                        <asp:Button ID="btnEditPassShow" runat="server" Text="Editar contraseña" CssClass="botones w-100 my-2" OnClick="btnEditPassShow_Click" />

                    </div>
                    <hr />
                    <br />
                    <div class="nav-item">
                        <asp:Image ID="imgUser" runat="server" CssClass="userpicture m-2" ImageUrl="~/Vista/imagenes/UserPics/24331490_4800_1_05.jpg" />
                        <br />
                        <asp:Button ID="btnChangeProfPic" runat="server" Text="Cambiar foto" OnClick="btnChangeProfPic_Click" CssClass="botones w-90 mx-2" />
                    </div>

                </div>

                <div class="imgSelection navbar nav-item col-lg-5 col-md-12 col-sm-12 avatarimgbox" id="imgAvatarBox">
                    <h4 class="text-center w-100">Selecciona un avatar por defecto</h4>
                    <asp:ImageButton ID="avatarpic1" runat="server" ImageUrl="~/Vista/Pynterfase avatars/1.png" CssClass="nav-item avatarimg my-2 mx-2 imgselector" OnClick="avatarpic1_Click" />
                    <asp:ImageButton ID="avatarpic2" runat="server" ImageUrl="~/Vista/Pynterfase avatars/2.png" CssClass="nav-item avatarimg my-2 mx-2 imgselector" OnClick="avatarpic2_Click" />
                    <asp:ImageButton ID="avatarpic3" runat="server" ImageUrl="~/Vista/Pynterfase avatars/3.png" CssClass="nav-item avatarimg my-2 mx-2 imgselector" OnClick="avatarpic3_Click" />
                    <asp:ImageButton ID="avatarpic4" runat="server" ImageUrl="~/Vista/Pynterfase avatars/4.png" CssClass="nav-item avatarimg my-2 mx-2 imgselector" OnClick="avatarpic4_Click" />
                    <asp:ImageButton ID="avatarpic5" runat="server" ImageUrl="~/Vista/Pynterfase avatars/5.png" CssClass="nav-item avatarimg my-2 mx-2 imgselector" OnClick="avatarpic5_Click" />
                    <asp:ImageButton ID="avatarpic6" runat="server" ImageUrl="~/Vista/Pynterfase avatars/6.png" CssClass="nav-item avatarimg my-2 mx-2 imgselector" OnClick="avatarpic6_Click" />
                    <div class="uploadimgbox my-2 mx-2 w-90">

                        <p class="mx-2">¿No te gusto ninguno? Selecciona una imagen de tu dispositivo</p>
                        <asp:FileUpload ID="FlUpimgUser" runat="server" CssClass="mx-2 btn-light btn w-90" />
                        <asp:Button ID="btnUploadImg" runat="server" Text="Confirmar selección" CssClass="botones w-90 mx-2 my-2" OnClick="btnUploadImg_Click" />

                    </div>
                    
                </div>


                <div class="nameSpace navbar col-lg-5 col-md-12 col-sm-12 nav-item my-2" id="nameboxspace">

                    <p class="m-2">Nombre de usuario</p>
                    <asp:TextBox ID="txtName" runat="server" CssClass="nav-item w-90 my-2 mx-3 txtcajas" placeholder="Tu nuevo nombre aqui"></asp:TextBox>
                    <asp:Button ID="btnEnviarNombre" runat="server" Text="Cambiar nombre" CssClass="botones nav-item w-90 my-2 mx-3" />

                </div>

                <div id="passwordboxspace" class="col-lg-5 col-md-12 col-sm-12 nav-item my-2 paswordspace">

                    <p class="mx-2">Contraseña actual</p>
                    <br />
                    <asp:TextBox ID="txtActualPass" runat="server" CssClass="w-90 mx-2 txtcajas" placeholder="Contraseña Actual"></asp:TextBox>
                    <p class="mx-2">Contraseña nueva</p>
                    <br />
                    <asp:TextBox ID="txtNewPass" runat="server" CssClass="w-90 mx-2 txtcajas" placeholder="Contraseña Nueva"></asp:TextBox>
                    <p class="mx-2">Repite contraseña mueva</p>
                    <br />
                    <asp:TextBox ID="txtrepPass" runat="server" CssClass="w-90 mx-2 txtcajas" placeholder="Repetir contraseña nueva"></asp:TextBox>
                    <br />
                    <asp:Button ID="btnUpdatePass" runat="server" Text="Actualizar contraseña" CssClass="botones w-90 my-2 mx-2" />


                </div>
                <%-- Este div lo usare como relleno de columna falso --%>
                <div class="col-lg-1 col-md-12 col-sm-12 nav-item"></div>


            </div>
        </div>
    </div>
    <script src="InfoUsuario.js"></script>
</asp:Content>
