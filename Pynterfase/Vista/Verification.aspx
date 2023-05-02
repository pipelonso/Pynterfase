<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Verification.aspx.cs" Inherits="Pynterfase.Verification" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1>VEFICACIÓN DE CORREO</h1>
            <p>Tu correo no a sido verificado, hacemos esto para asegurarnos que puedas recuperar tu cuenta en un futuro si olvidas la contraseña</p>
            <p>Ingresa el codigo que acaba de llegar a tu correo</p>
            <asp:TextBox ID="txtCodigo" runat="server"></asp:TextBox>
            <asp:Button ID="btnVerificar" runat="server" Text="Verificar" OnClick="btnVerificar_Click" />

        </div>
    </form>
</body>
</html>
