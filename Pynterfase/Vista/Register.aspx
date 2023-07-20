<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="Pynterfase.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/Register.css" rel="stylesheet" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <script src="js/bootstrap.min.js"></script>
    <form id="form1" runat="server">
        <div class="">
            <div class="">
                <div class="">
                    <div class="navbar p-3">
                        <div class="nav-item col-sm-12 col-md-2 col-lg-3 col-12"></div>
                        <div class="nav-item col-sm-12 col-md-8 col-lg-6 col-12 regbox p-2" id="regbox">
                            <h1 class="text-center" style ="position:relative; top : -10px;">REGISTRO</h1>
                            <br />
                            <br />
                            <p>CORREO ELECTRONICO</p>

                            <asp:TextBox ID="txtEmail" runat="server" placeholder="Correo" CssClass="w-100 txtcajas text-white"></asp:TextBox>

                            <p>Nombre de usuario</p> 
                            <asp:TextBox ID="txtName" runat="server" placeholder="Nombre de usuario" CssClass="w-100 txtcajas text-white"></asp:TextBox>

                            <p>Contraseña</p>
                            <asp:TextBox ID="txtPassword" runat="server" CssClass="w-100 txtcajas text-white" TextMode="Password" placeholder="Contraseña"></asp:TextBox>

                            <p>Repetir contraseña</p>
                            <asp:TextBox ID="txtRepPassword" runat="server" CssClass="w-100 txtcajas text-white" TextMode="Password" placeholder="Repetir contraseña"></asp:TextBox>
                            <br />
                            <br />

                            <asp:Button ID="btnRegister" runat="server" Text="REGISTRARSE" OnClick="btnRegister_Click" CssClass="w-100 onbtn isbtn text-white h2" Height="50px" />
                            <br />
                            <asp:LinkButton ID="lbtnAlreadyRegister" runat="server" CssClass="ongray my-3" OnClick="lbtnAlreadyRegister_Click">Ya estoy registrado</asp:LinkButton>
                        </div>
                        <div class="nav-item col-sm-12 col-md-2 col-lg-3 col-12"></div>
                    </div>

                </div>

            </div>

        </div>
        <script src="Register.js"></script>
        <script src="../Scripts/sweetalert.min.js"></script>
        <script src="alertManager.js"></script>
        
    </form>


</body>
</html>
