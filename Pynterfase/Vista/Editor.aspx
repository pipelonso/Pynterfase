<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Editor.aspx.cs" Inherits="Pynterfase.Vista.Editor" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/Editor.css" rel="stylesheet" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div id="canvasDimPanel"> 
            <h4>Fila la resolución del lienzo para poder trabajar</h4>
            <asp:TextBox ID="txtAncho" runat="server" placeholder="1000"></asp:TextBox>
            <asp:TextBox ID="txtAlto" runat="server" placeholder="1000"></asp:TextBox>
            <asp:Button ID="btnGenerarLienzo" runat="server" Text="CREAR LIENZO" OnClick="btnGenerarLienzo_Click" />
        </div>
        <div id="lienzo" class="canvaslayer" runat="server">

            <%--<p class="canvaslayer"></p>--%>
        </div>
        <asp:Button ID="btnTop" runat="server" Text=">>" OnClick="btnTop_Click" />
        <script src="js/bootstrap.min.js"></script>
        <script src="Editor.js"></script>
    </form>
</body>
</html>
