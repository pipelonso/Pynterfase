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
            <div class="col-sm"></div>
            <div class="col-lg-6 col-sm-12 myalingY myadjust loginbg">
                <h1 class="ongray">LOGIN</h1>
                <br />
                <p>CORREO</p>
                <asp:TextBox ID="txtEmail" runat="server" placeholder="Correo" CssClass=" w-100 form-text text-center align-content-center txtcajas"></asp:TextBox>
                <br />
                <br />
                <p>CONTRASEÑA</p>
                <asp:TextBox ID="txtPassword" runat="server" placeholder="Contraseña" CssClass="w-100 text-center txtcajas" TextMode="Password"></asp:TextBox>
                <br />
                <br />
                <asp:Button ID="btnIngresar" runat="server" Text="INGRESAR" CssClass="btn-light w-100 txtcajas ongray h2 onbtn" OnClick="btnIngresar_Click"/>
                <br />
                <br />
                <div class="container-fluid">
                    <asp:LinkButton ID="lbtnForgotPass" runat="server" CssClass="ongray align-content-center" OnClick="lbtnForgotPass_Click">Olvide mi contraseña</asp:LinkButton>
                    <br />
                    <asp:LinkButton ID="lbtnNotRegister" runat="server" CssClass="ongray align-content-center" OnClick="lbtnNotRegister_Click">No estoy registrado</asp:LinkButton>
                </div>
                
            </div>
            <div class="col-sm">

                
            </div>
            <script src="Scripts/sweetalert.min.js"></script>
            <script src="Vista/alertManager.js"></script>
        </div>
        <script src="Vista/js/bootstrap.min.js"></script>
    </form>
</body>
</html>
