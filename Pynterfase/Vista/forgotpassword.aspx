<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="forgotpassword.aspx.cs" Inherits="Pynterfase.Vista.forgotpasword" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            
            <div class="container-fluid">
                <div class="col-lg-2"></div>
                <div>
                    <h1>Enviar correo de recuperación</h1>
                    <p>Introduce el correo de la cuenta con la que hizo el registro</p>
                    <asp:TextBox ID="txtCorreo" runat="server"></asp:TextBox>
                    <asp:Button ID="btnValidar" runat="server" Text="Enviar correo" />
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
        
        <script src="js/bootstrap.min.js"></script>
    </form>
</body>
</html>
