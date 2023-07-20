<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Pynterfase.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Styles/sweetalert.css" rel="stylesheet" />
    
    <link href="Vista/mycss/login.css" rel="stylesheet" />
    <link href="Vista/css/bootstrap.min.css" rel="stylesheet" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    
    <form id="form1" runat="server">
        
        <div class="navbar p-2">
            <div class="nav-item col-12 col-sm-12 col-md-1 col-lg-2"></div>
            <div class="nav-item loginbg col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 p-3" id="loginbox">
                <h1 class="ongray" style="position:relative; top:-15px;">LOGIN</h1>
                <br />
                <p>CORREO</p>
                <asp:TextBox ID="txtEmail" runat="server" placeholder="Correo" CssClass=" w-100 form-text text-center align-content-center txtcajas text-white"></asp:TextBox>
                <br />
                <br />
                <p>CONTRASEÑA</p>
                <asp:TextBox ID="txtPassword" runat="server" placeholder="Contraseña" CssClass="w-100 text-center txtcajas text-white" TextMode="Password"></asp:TextBox>
                <br />
                <br />
                <asp:Button ID="btnIngresar" runat="server" Text="INGRESAR" CssClass="btn-light w-100 isbtn ongray h2 onbtn text-white" OnClick="btnIngresar_Click"/>
                <br />
                <br />
                <div class="container-fluid" style="position:relative; top:-20px;">
                    <asp:LinkButton ID="lbtnForgotPass" runat="server" CssClass="ongray align-content-center" OnClick="lbtnForgotPass_Click">Olvide mi contraseña</asp:LinkButton>
                    <br />
                    <asp:LinkButton ID="lbtnNotRegister" runat="server" CssClass="ongray align-content-center" OnClick="lbtnNotRegister_Click">No estoy registrado</asp:LinkButton>
                </div>
                
            </div>
            <div class="nav-item col-12 col-sm-12 col-md-1 col-lg-2">

                
            </div>
            <script src="Scripts/sweetalert.min.js"></script>
            <script src="Vista/alertManager.js"></script>
        </div>
        <script src="Login.js"></script>
        <script src="Vista/js/bootstrap.min.js"></script>
        
    </form>
</body>
</html>
