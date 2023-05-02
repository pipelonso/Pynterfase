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
        
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 bg-primary myalingY myadjust">
                <h1 class="text-center">LOGIN</h1>
                <p>CORREO</p>
                <asp:TextBox ID="txtEmail" runat="server" placeholder="Correo" CssClass=" w-100 form-text text-center align-content-center"></asp:TextBox>
                <br />
                <br />
                <p>CONTRASEÑA</p>
                <asp:TextBox ID="txtPassword" runat="server" placeholder="Contraseña" CssClass="w-100 text-center" TextMode="Password"></asp:TextBox>
                <br />
                <br />
                <asp:Button ID="btnIngresar" runat="server" Text="INGRESAR" CssClass="btn-light w-100" OnClick="btnIngresar_Click"/>
                <br />
                <br />
                <asp:LinkButton ID="lbtnForgotPass" runat="server" CssClass="text-black align-content-cente">Olvide mi contraseña</asp:LinkButton>
                <br />
                <asp:LinkButton ID="lbtnNotRegister" runat="server" CssClass="text-black align-content-center">No estoy registrado</asp:LinkButton>
            </div>
            <div class="col-3">

                
            </div>
            <script src="Scripts/sweetalert.min.js"></script>
            <script src="Vista/alertManager.js"></script>
        </div>
        <script src="Vista/js/bootstrap.min.js"></script>
    </form>
</body>
</html>
