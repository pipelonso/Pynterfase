<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Editor.aspx.cs" Inherits="Pynterfase.Vista.Editor" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/Editor.css" rel="stylesheet" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div id="canvasDimPanel">
            <h4>Fila la resolución del lienzo para poder trabajar</h4>
            <div class="container-fluid">
                <p>Ancho de la ventana</p>
                <asp:TextBox ID="txtAncho" runat="server" placeholder="1000" CssClass="w-100 txtcajas"></asp:TextBox>
                <p>Alto de la ventana</p>
                <asp:TextBox ID="txtAlto" runat="server" placeholder="1000" CssClass="w-100 txtcajas"></asp:TextBox>
                <p>Titulo de la ventana</p>
                <asp:TextBox ID="txtTitle" runat="server" placeholder="Titulo" CssClass="w-100 txtcajas"></asp:TextBox>
            </div>

            <br />
            <div class="container navbar">
                <div class="nav-item col-12 col-sm-12 col-md-2 col-lg-3"></div>
                <div class="container-fluid nav-item col-12 col-sm-12 col-md-10 col-lg-6 checkscontainer">

                    <asp:CheckBox ID="ChbResizable" runat="server" Text="Tamaño de pantalla escalable" CssClass=" my-1 w-100 chekers" />
                    
                    <asp:CheckBox ID="ChbMaximizable" runat="server" Text="Ventana Maximizable" CssClass="my-1 w-100 chekers" />
                    
                    <asp:CheckBox ID="ChbMinimizable" runat="server" Text="Ventana Minimizable" CssClass="my-1 w-100 chekers" />                    
                    
                    <asp:CheckBox ID="ChbFullScrean" runat="server" Text="Pantalla completa" CssClass="my-1 w-100 chekers" />
                    
                    <asp:CheckBox ID="ChbShowintaskbar" runat="server" Text="Mostrar en barra de tareas" CssClass="my-1 w-100 chekers" />
                    
                    <asp:CheckBox ID="ChbTransparency" runat="server" Text="Habilitar transparencias" CssClass="my-1 w-100 chekers" />
                    
                    <asp:CheckBox ID="ChbAlwaysOnTop" runat="server" Text="Siempre arriba" CssClass="my-1 w-100 chekers" />
                    
                    <asp:CheckBox ID="ChbCursorVisible" runat="server" Text="Mostrar Cursor del raton" Checked="True" CssClass="my-1 w-100 chekers"/>
                    
                    <asp:CheckBox ID="ChbTakeFocus" runat="server" Text="Obtener el foco inicial" CssClass="my-1 w-100 chekers" />                    
                    
                    <asp:CheckBox ID="ChbAutoMeasure" runat="server" Text="Ajustar tamaño al contenido" Checked="True" CssClass="my-1 w-100 chekers" />

                </div>
                <div class="nav-item col-12 col-sm-12 col-md-2 col-lg-3"></div>
            </div>


            <br />
            <asp:TextBox ID="txtBGColor" runat="server" placeholder="####" CssClass="txtcajas my-2 mx-3"></asp:TextBox>
            <input type="button" name="btnShowColorPalete" value="Elegir" class="botones my-2 mx-3"/>

            <div class="container-fluid">
                <asp:Button ID="btnGenerarLienzo" runat="server" Text="CREAR LIENZO" OnClick="btnGenerarLienzo_Click" CssClass="w-100 botones my-2" />
            </div>
            
        </div>
        <div class="container-fluid navbar superiorBar">

            <div class="col-lg-2 col-md-2 col-sm-12 nav-item"></div>
            <div id="ElementsPanel" class="nav-item navbar tkcontainerElements col-lg-6 col-md-6 col-sm-12 col-12">
                <input type="button" name="btnBotonTk" value="" id="btnTKButton" class="tkButtonbtn tkbutton my-1 mx-2" />
                <input type="button" name="btnBotonTk" value="" id="btnTKLabel" class="tkLabelbtn tkbutton my-1 mx-2" />
                <input type="button" name="btnBotonTk" value="" id="btnTKTextBox" class="tkTextboxbtn tkbutton my-1 mx-2" />
                <input type="button" name="btnBotonTk" value="" id="btnTKCheckbox" class="tkCheckboxbtn tkbutton my-1 mx-2" />
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12 nav-item"></div>


        </div>



        <div class="container navbar">

            <div class="nav-item col-lg-2 col-md-1 col-sm-12 col-12"></div>
            <%-- Esta porqueria horrible de aqui es el lienzo principal del editor --%>
            <div class="nav-item col-lg-8 col-md-10 col-sm-12 col-12 limitlienzo">

                <div id="lienzo" class="canvaslayer" style="width: 2px; height: 2px;" runat="server">
                </div>

            </div>
            <div class="nav-item col-lg-2 col-md-1 col-sm-12 col-12"></div>


        </div>


        <asp:Button ID="btnTop" runat="server" Text=">>" OnClick="btnTop_Click" />
        <script src="js/bootstrap.min.js"></script>
        <script src="Editor.js"></script>
    </form>
</body>
</html>
