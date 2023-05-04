<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="forgotpassword.aspx.cs" Inherits="Pynterfase.Vista.forgotpasword" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
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
                    <div id="contSendMail">
                        <p class="my-3">Introduce el correo de la cuenta con la que hizo el registro</p>
                        <asp:TextBox ID="txtCorreo" runat="server" CssClass=""></asp:TextBox>
                        <asp:Button ID="btnValidar" runat="server" Text="Enviar correo" OnClick="btnValidar_Click"/>
                    </div>
                    
                    <hr />
                    
                    <div id="contCode" style="" >
                        <p>Digita el codigo que llego a tu correo</p>
                        <asp:TextBox ID="txtCode" runat="server"></asp:TextBox>
                        <asp:Button ID="btnRevisarCodigo" runat="server" Text="VERIFICAR" OnClick="btnRevisarCodigo_Click" />
                    </div>
                    
                    <hr />

                    <div id="contpass">
                        <p>Ingresa tu nueva contraseña</p>
                        <asp:TextBox ID="txtPass1" runat="server" Height="25px" TextMode="Password"></asp:TextBox>
                        <p>Repite tu nueva contraseña</p>
                        <asp:TextBox ID="txtPass2" runat="server" TextMode="Password"></asp:TextBox>

                        <asp:Button ID="btnChangePass" runat="server" Text="Cambiar contraseña" OnClick="btnChangePass_Click" />

                    </div>

                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
        <script src="../Scripts/sweetalert.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="alertManager.js"></script>
        <script src="forgotpassword.js"></script>
    </form>
</body>
</html>
