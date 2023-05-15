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
            <p>Ancho de la ventana</p>
            <asp:TextBox ID="txtAncho" runat="server" placeholder="1000"></asp:TextBox>
            <p>Alto de la ventana</p>
            <asp:TextBox ID="txtAlto" runat="server" placeholder="1000"></asp:TextBox>
            <p>Titulo de la ventana</p>
            <asp:TextBox ID="txtTitle" runat="server" placeholder="Titulo"></asp:TextBox>

            <asp:CheckBox ID="ChbResizable" runat="server" Text="Tamaño de pantalla escalable" />
            <asp:CheckBox ID="ChbMaximizable" runat="server" Text="Ventana Maximizable" />
            <asp:CheckBox ID="ChbMinimizable" runat="server" Text="Ventana Minimizable" />
            <asp:CheckBox ID="ChbFullScrean" runat="server" Text="Pantalla completa" />
            <asp:CheckBox ID="ChbShowintaskbar" runat="server" Text="Mostrar en barra de tareas" />
            <asp:CheckBox ID="ChbTransparency" runat="server" Text="Habilitar transparencias" />
            <asp:CheckBox ID="ChbAlwaysOnTop" runat="server" Text="Siempre arriba" />
            <asp:CheckBox ID="ChbCursorVisible" runat="server" Text="Mostrar Cursos del raton" Checked="True" />
            <asp:CheckBox ID="ChbTakeFocus" runat="server" Text="Obtener el foco inicial" />
            <asp:CheckBox ID="ChbAutoMeasure" runat="server" Text="Ajustar tamaño al contenido" Checked="True" />

            <br />
            <asp:TextBox ID="txtBGColor" runat="server" placeholder="####"></asp:TextBox>
            <input type="button" name="btnShowColorPalete" value="Elegir" />


            <asp:Button ID="btnGenerarLienzo" runat="server" Text="CREAR LIENZO" OnClick="btnGenerarLienzo_Click" CssClass="w-100"/>
        </div>
        <%-- Esta porqueria horrible de aqui es el lienzo principal del editor --%>
        <div id="lienzo" class="canvaslayer" style="width : 2px; height : 2px;" runat="server">

            <%--<p class="canvaslayer"></p>--%>
        </div>
        <asp:Button ID="btnTop" runat="server" Text=">>" OnClick="btnTop_Click" />
        <script src="js/bootstrap.min.js"></script>
        <script src="Editor.js"></script>
    </form>
</body>
</html>
