<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Verification.aspx.cs" Inherits="Pynterfase.Verification" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="mycss/Verificacion.css" rel="stylesheet" />
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div id="divgen" class="vignite">
            <div class="navbar container-fluid">
            <div class="col-2 nav-item"></div>
            <div class="col-8 nav-item">
                <h1 class="text-white text-center">VEFICACIÓN DE CORREO</h1>
                <p class="text-white w-100 text-center ">Tu correo no a sido verificado, hacemos esto para asegurarnos que puedas recuperar tu cuenta en un futuro si olvidas la contraseña</p>
                <p class="text-white text-center w-100 ">Ingresa el codigo que acaba de llegar a tu correo</p>
                <asp:TextBox ID="txtCodigo" runat="server" CssClass="txtcajas w-100 my-2"></asp:TextBox>
                <asp:Button ID="btnVerificar" runat="server" Text="Verificar" OnClick="btnVerificar_Click" CssClass="botones w-100 my-2 " />
            </div>
            <div class="col-2 nav-item"></div>
        </div>
        </div>
        

        <script src="../Scripts/sweetalert.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="alertManager.js"></script>
        <script src="Verification.js"></script>
    </form>
</body>
</html>
