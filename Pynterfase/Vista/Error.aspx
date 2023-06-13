<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Error.aspx.cs" Inherits="Pynterfase.Vista.Error" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
</head>
<body style="background-color: #000046; padding:0px; margin:0px" >
    <form id="form1" runat="server">
        <div class="navbar  nav-fill">
            <div class="nav-item  col-12 col-sm-12 col-lg-6 col-md-12" style="background-image:url('imagenes/StylizedErrorBack.svg'); " id="ErrorMSGDIV">
                <div style="background-image:url('imagenes/bignite.svg'); background-size:contain;" class="w-100" id="intoErrorMSG" >
                    
                    <div class="w-100 container-fluid" style="position : relative; top:40%;">

                    <h1 class="text-white text-center w-100" >ERROR</h1>

                    <p class="text-white text-center w-100" >Proyecto no encontrado, esto puede ser debido a:</p>
                    <ul class="text-white text-center w-100" >
                        <li>
                            <p>Tu no tienes acceso</p>
                        </li>
                        <li>
                            <p>El proyecto a sido eliminado</p>
                        </li>
                    </ul>

                        <asp:Button ID="btnGotoHome" runat="server" Text="VOLVER AL INICIO" OnClick="btnGotoHome_Click" />


                </div>

                </div>
                

            </div>

            <div class="nav-item container-fluid col-12 col-sm-12 col-lg-6 col-md-12 justify-content-center" >
                <img src="imagenes/AnimError.gif" id="imgOvni" class="" />
            </div>
            


        </div>
        <script src="Error.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </form>
</body>
</html>
