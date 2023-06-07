<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Editor.aspx.cs" Inherits="Pynterfase.Vista.Editor" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="mycss/Editor.css" rel="stylesheet" />
    <link href="../Styles/sweetalert.css" rel="stylesheet" />
    <link href="mycss/tkStyles.css" rel="stylesheet" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">

        <div id="canvasDimPanel" class="bg-light cajasanim">
            <h4 class="m-2">Fila la resolución del lienzo para poder trabajar</h4>
            <div class="container-fluid">
                <p>Ancho de la ventana</p>
                <%--<asp:TextBox ID="txtAncho" runat="server" placeholder="1000" CssClass="w-100 txtcajas"></asp:TextBox>--%>
                <input type="text" name="name" value="" id="txtAncho" class="w-100 txtcajas" />
                <p>Alto de la ventana</p>
                <%--<asp:TextBox ID="txtAlto" runat="server" placeholder="1000" CssClass="w-100 txtcajas"></asp:TextBox>--%>
                <input type="text" name="name" value="" id="txtAlto" class="w-100 txtcajas" />
                <p>Titulo de la ventana</p>
                <%--<asp:TextBox ID="txtTitle" runat="server" placeholder="Titulo" CssClass="w-100 txtcajas"></asp:TextBox>--%>
                <input type="text" name="name" value="" id="txtTitle" class="w-100 txtcajas" />
            </div>

            <br />
            <%--<div class="container navbar">
                <div class="nav-item col-12 col-sm-12 col-md-2 col-lg-3"></div>
                <div class="container-fluid nav-item col-12 col-sm-12 col-md-10 col-lg-6 checkscontainer">

                    <asp:CheckBox ID="ChbResizable" runat="server" Text="Tamaño de pantalla escalable" CssClass=" my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbMaximizable" runat="server" Text="Ventana Maximizable" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbMinimizable" runat="server" Text="Ventana Minimizable" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbFullScrean" runat="server" Text="Pantalla completa" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbShowintaskbar" runat="server" Text="Mostrar en barra de tareas" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbTransparency" runat="server" Text="Habilitar transparencias" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbAlwaysOnTop" runat="server" Text="Siempre arriba" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbCursorVisible" runat="server" Text="Mostrar Cursor del raton" Checked="True" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbTakeFocus" runat="server" Text="Obtener el foco inicial" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChbAutoMeasure" runat="server" Text="Ajustar tamaño al contenido" Checked="True" CssClass="my-1 w-100 chekers" />

                </div>
                <div class="nav-item col-12 col-sm-12 col-md-2 col-lg-3"></div>
            </div>--%>


            <%--<br />--%>
            <%--<asp:TextBox ID="txtBGColor" runat="server" placeholder="####" CssClass="txtcajas my-2 mx-3"></asp:TextBox>
            <input type="button" name="btnShowColorPalete" value="Elegir" class="botones my-2 mx-3" />--%>

            <div class="container-fluid">
                <input type="button" name="" value="COMENZAR A TRABAJAR" class="w-100 botones my-2" onclick="ValidateStart();" />
                <%--<asp:Button ID="btnGenerarLienzo" runat="server" Text="CREAR LIENZO" OnClick="btnGenerarLienzo_Click" CssClass="w-100 botones my-2" />--%>
            </div>

        </div>

        <div class="container-fluid bg-dark cajasanim text-white" id="editWindowSizePanel">
            <input type="button" name="name" value="" class="closebtn my-2" onclick="CloseEditWindowSizePanel();" />
            <hr />
            <p class="mx-2 my-2 text-center">Ancho de la ventana</p>
            <input type="text" name="txtAnchoH" value="" id="txtAnchoH" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
            <p class="mx-2 text-center">Alto de la ventana</p>
            <input type="text" name="txtAltoH" value="" id="txtAltoH" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
            <input type="button" name="name" value="Cambiar tamaño de la ventana" class="my-2 w-100 botones" onclick="IntoResizeCanvas();" />
            <hr />
            <p class="text-center">Selecciona un nombre para tu ventana</p>
            <input type="text" name="name" value="" class="my-2 w-100 txtcajas" id="txtlienzoname" onkeydown="return handleKeyDown(event);" placeholder="Nombre" />
            <%--<input type="button" name="name" value="Colocar nombre a la ventana" class="w-100 botones" />--%>
            <div class="container navbar">
                <div class="nav-item col-12 col-sm-12 col-md-2 col-lg-3"></div>
                <div class="container-fluid nav-item col-12 col-sm-12 col-md-10 col-lg-6 checkscontainer">

                    <asp:CheckBox ID="Chkeditresizable" runat="server" Text="Tamaño de pantalla escalable" CssClass=" my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditMaximizable" runat="server" Text="Ventana Maximizable" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditMinimizable" runat="server" Text="Ventana Minimizable" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditFullScrean" runat="server" Text="Pantalla completa" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditShowTaskbar" runat="server" Text="Mostrar en barra de tareas" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditTransparent" runat="server" Text="Habilitar transparencias" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditAlwaysInFront" runat="server" Text="Siempre arriba" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditShowCursor" runat="server" Text="Mostrar Cursor del raton" Checked="True" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditTakeFocus" runat="server" Text="Obtener el foco inicial" CssClass="my-1 w-100 chekers" />

                    <asp:CheckBox ID="ChkeditAutoMeasure" runat="server" Text="Ajustar tamaño al contenido" Checked="True" CssClass="my-1 w-100 chekers" />

                </div>
                <div class="nav-item col-12 col-sm-12 col-md-2 col-lg-3"></div>
            </div>
            <br />
            <p>Color de fondo de la ventana</p>
            <input type="color" name="name" value="" id="ChBGColor" class="botones my-2 mx-3 w-25" />
            <%--<asp:TextBox ID="txtBGColor" runat="server" placeholder="####" CssClass="txtcajas my-2 mx-3"></asp:TextBox>--%>
            <input type="button" name="btnShowColorPalete" value="Elegir" id="BtnsetBgColor" class="botones my-2 mx-3" onclick="setBGColor();" />
            <hr />
        </div>

        <div id="PrivacyPanel" class="container-fluid border-2 border-danger">

            <input type="button" name="name" value="" id="btnclosePrivacy" class="my-2 closebtn" />
            <p class="text-center text-white">CAMBIAR PRIVACIDAD DEL PROYECTO</p>
            <asp:DropDownList ID="ddlPrivacyProps" runat="server" CssClass="my-2 botones w-100"></asp:DropDownList>
            <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                <ContentTemplate>
                    <asp:Button ID="btnChangePrivacy" runat="server" Text="APLICAR CAMBIOS" CssClass="botones w-100 my-2" />
                </ContentTemplate>
            </asp:UpdatePanel>


        </div>

        <div id="ProjectUsersPanel">

            <p class="text-white text-center">Quien tiene acceso al proyecto</p>
            
            
            <div class="container-fluid" style="overflow:auto; height:300px;">                             
                <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                    <ContentTemplate>
                        <div class="navbar">
                            <p class="nav-item mx-2 text-white col-1">Agregar usuario por correo</p>
                            <div class="nav-item col-10 navbar">
                                <asp:TextBox ID="txtSearchCorreo" runat="server" CssClass="w-75 txtcajas nav-item"></asp:TextBox>
                                <asp:Button ID="btnAddUser" runat="server" Text="" CssClass="btnAddUser nav-item" />
                            </div>                            
                        </div>                        
                        <asp:Repeater ID="RPUsers" runat="server">
                            <ItemTemplate>
                                <div class="navbar  isuserbox container-fluid">
                                    <div class="nav-item navbar col-sm-10 col-md-10 col-lg-10">
                                        <asp:Label ID="lblNombreUserRP" runat="server" Text='<%# Eval("nombre") %>' CssClass="nav-item mx-2 text-white" ></asp:Label>
                                        <asp:Label ID="lblCorreoRp" runat="server" Text='<%# Eval("correo") %>' CssClass="nav-item mx-2 text-white"></asp:Label>
                                        <asp:Image ID="imgUserRP" runat="server" ImageUrl='<%# Eval("imagenUsuario") %>' CssClass="nav-item mx-2 imgUser" Height="40px" Width="40px"/>
                                    </div>                     
                                    <asp:Button ID="btnDeleteUserRp" runat="server" Text="" CssClass="btnDeleteUser nav-item mx-2 col-sm-1 col-md-1 col-lg-1" />
                                </div>
                            </ItemTemplate>
                        </asp:Repeater>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </div>


        </div>


        <div class="cajasanim container-fluid navbar superiorBar" id="supBar" style="height: 150px;">
            <div class="col-lg-2 col-md-2 col-sm-12 nav-item infobox mx-1" id="infobox">
                <asp:Label ID="LlblProjectName" runat="server" Text="---" CssClass="text-white mx-2"></asp:Label>

            </div>



            <div id="ElementsPanel" class="nav-item navbar tkcontainerElements col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="nav-item mx-2 bg-dark navbar">
                    <input type="button" name="btnBotonTk" value="" id="btnTKButton" class="tkButtonbtn tkbutton my-1 nav-item mx-1" onclick="setselectedButton();" />
                    <input type="button" name="btnBotonTk" value="" id="btnTKLabel" class="tkLabelbtn tkbutton my-1 nav-item mx-1" onclick="setselectedLabel();" />
                    <input type="button" name="btnBotonTk" value="" id="btnTKTextBox" class="tkTextboxbtn tkbutton my-1 nav-item mx-1" onclick="setselectedTextbox();" />
                    <input type="button" name="btnBotonTk" value="" id="btnTKCheckbox" class="tkCheckboxbtn tkbutton my-1 nav-item mx-1" onclick="setSelectedCheckbox();" />
                </div>
                <div class="container-fluid">
                    <input type="button" name="editcanvasProp" value="EDITAR PROPIEDADES DE LA VENTANA" class="botones my-2 nav-item w-100" onclick="OpenEditWindowSizePanel();" />
                </div>


            </div>
            <div class="nav-item" id="controlPanelSupbar">
                <p id="lblSelected" class="text-light text-center">--- </p>
                <input type="button" name="btnAddH" value="Añadir" id="btnAddTk" class="my-1 botones mx-2" style="width: 150px;" onclick="AddTKElement();" />
                <br />
                <input type="button" name="btnDeleteH" value="Eliminar selección" id="btnDeleteTk" class="my-1 botones mx-2 " style="width: 150px;" onclick="DeleteElement();" />
                <br />
                <input type="button" name="name" value="Aplicar" class="botones mx-2 my-1" style="width: 150px;" onclick="applyChanges();" />

            </div>

            <div class="col-lg-2 col-md-2 col-sm-12 nav-item" id="espaciadosSupBar">
                <input type="button" name="name" value="" id="btnShowAddUsers" style="height: 40px; background-color: none; width: 40px; border: none; background: none; background-image: url('imagenes/EditorPrivacySection/person-fill-add.svg'); background-size: cover;" class="mx-2" />
                <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/Vista/imagenes/EditorPrivacySection/globe.svg" CssClass="mx-2" Height="40px" Width="40px" />
            </div>
            <div id="controlesGuardar">
                <input type="button" name="name" value="GUARDAR" class="botones mx-2" onclick="onSaveChanges();" />
                <img src="imagenes/cloud-check-fill.svg" alt="onsaveFileimg" class="mx-2" style="height: 30px" id="saveIndicatorIMG" />
            </div>
            <div>
                <input type="button" name="name" value="EXPORTAR" class="botones mx-2" onclick="showExportPanel();" />
            </div>
        </div>


        <%-- Panel que contiene el lienzo y el panel de propiedades --%>
        <div class="container-fluid navbar" id="panelEditorCuerpo">

            <div class="nav-item col-lg-2 col-md-12 col-sm-12 col-12 mx-2 limitProperties my-2" id="propertiesPanel">

                <div class="w-100 bg-dark" style="">

                    <div id="buttonPropPanel" class="container-fluid text-light">
                        <p style="background-color: darkorange" class="text-center w-100">Propiedades Boton</p>
                        <hr />
                        <p>Id</p>
                        <input type="text" name="name" value="" id="txtButtonId" disabled="disabled" class="txtcajas w-100 text-white" />
                        <hr />
                        <p>X</p>
                        <input type="text" id="txtXButtonTK" name="txtXbuttonTK" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Y</p>
                        <input type="text" id="txtYbuttonTk" name="txtYbuttonTk" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%--<p>Activebackground</p>
                        <input type="text" id="txtABGbuttonTk" name="txtABGbuttonTk" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>Activeforeground</p>
                        <input type="text" id="txtAFGbuttonTk" name="txtAFGbuttonTk" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <p>Anchor</p>
                        <select id="txtanchorbuttonTk" class="txtcajas w-100">
                            <option value="none"></option>
                            <option value="tk.N">tk.N</option>
                            <option value="tk.S">tk.S</option>
                            <option value="tk.E">tk.E</option>
                            <option value="tk.W">tk.W</option>
                            <option value="tk.NE">tk.NE</option>
                            <option value="tk.NW">tk.NW</option>
                            <option value="tk.SE">tk.SE</option>
                            <option value="tk.SW">tk.SW</option>
                        </select>
                        <hr />
                        <%--<input type="text" id="txtanchorbuttonTk" name="txtanchorbuttonTk" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <p>Background</p>
                        <div class="navbar">
                            <%--<input type="text" id="txtBGbuttonTK" name="txtBGbuttonTK" value="" class="col-10 txtcajas nav-item" onkeydown="return handleKeyDown(event);" />--%>
                            <input type="color" id="txtBGbuttonTK" value="#0000ff" class="nav-item w-100" />
                        </div>

                        <hr />
                        <p>Bitmap</p>
                        <select id="ComboBitmap" class="txtcajas w-100">
                            <option value="none"></option>
                            <option value="error">error</option>
                            <option value="gray75">gray75</option>
                            <option value="gray50">gray50</option>
                            <option value="gray25">gray25</option>
                            <option value="gray12">gray12</option>
                            <option value="hourglass">hourglass</option>
                            <option value="info">info</option>
                            <option value="questhead">questhead</option>
                            <option value="question">question</option>
                            <option value="warning">warning</option>
                        </select>
                        <hr />
                        <p>Borderwidth</p>
                        <input type="text" id="txtBorderWidthbuttonTK" name="txtBorderWidthbuttonTK" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Compound</p>
                        <select id="comboCompound" class="txtcajas w-100">
                            <option value="nothing"></option>
                            <option value="none">none</option>
                            <option value="top">top</option>
                            <option value="botton">botton</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="center">center</option>

                        </select>
                        <hr />
                        <p>Cursor</p>
                        <select id="comboCursor" class="txtcajas w-100">
                            <option value="none"></option>
                            <option value="arrow">Flecha estándar</option>
                            <option value="hand2">Mano indicando que se puede hacer clic</option>
                            <option value="watch">Reloj indicando que la operación está en progreso</option>
                            <option value="crosshair">Cruz</option>
                            <option value="ibeam">Cursor en forma de "I"</option>
                            <option value="top_left_arrow">Flecha apuntando hacia la esquina superior izquierda</option>
                            <option value="top_right_arrow">Flecha apuntando hacia la esquina superior derecha</option>
                            <option value="bottom_left_arrow">Flecha apuntando hacia la esquina inferior izquierda</option>
                            <option value="bottom_right_arrow">Flecha apuntando hacia la esquina inferior derecha</option>
                            <option value="size_ns">Flecha de cambio de tamaño vertical</option>
                            <option value="size_we">Flecha de cambio de tamaño horizontal</option>
                        </select>
                        <hr />
                        <%--<p>Default</p>
                        <select id="comboDefaultbtn" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="normal">normal</option>
                            <option value="active">active</option>
                        </select>--%>
                        <%--<p>Disabledforeground</p>
                        <select id="comboDisableForegroundbtn" class="txtcajas w-100">
                            <option value="none"></option>
                            <option value="red">red</option>
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                            <option value="gray">gray</option>
                            <option value="purple">purple</option>
                            <option value="green">green</option>
                        </select>--%>
                        <p>Font</p>
                        <select id="comboFontBtn" class="txtcajas w-100">
                            <option value="none"></option>
                            <option value="Arial">Arial</option>
                            <option value="Helvetica">Helvetica</option>
                            <option value="Times_New_Roman">Times New Roman</option>
                            <option value="Courier_New">Courier New</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Comic_Sans_MS">Comic Sans MS</option>
                        </select>
                        <hr />
                        <p>Foreground</p>
                        <div class="navbar">
                            <%--<input type="text" id="txtButtonTkforeground" name="foreground" class="col-10 txtcajas nav-item" onkeydown="return handleKeyDown(event);" />--%>
                            <input type="color" id="txtButtonTkforeground" value="#0000ff" class="w-100 nav-item col-2" />
                        </div>

                        <hr />
                        <p>Height:</p>
                        <input type="text" id="txtButtonTkheight" name="height" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%--<p>Highlight Background:</p>
                        <input type="text" id="txtButtonTkhighlightbackground" name="highlightbackground" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>Highlight Color:</p>
                        <input type="text" id="txtButtonTkhighlightcolor" name="highlightcolor" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>Highlight Thickness:</p>
                        <input type="text" id="txtButtonTkhighlightthickness" name="highlightthickness" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>Image:</p>
                        <input type="text" id="txtButtonTkimage" name="image" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>Justify:</p>
                        <select id="txtButtonTkjustify" name="justify" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="left">left</option>
                            <option value="center">center</option>
                            <option value="right">right</option>
                        </select>--%>
                        <%--<p>Padx:</p>
                        <input type="text" id="txtButtonTkpadx" name="padx" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>Pady:</p>
                        <input type="text" id="txtButtonTkpady" name="pady" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>Relief:</p>
                        <select id="txtButtonTkrelief" name="relief" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="flat">flat</option>
                            <option value="raised">raised</option>
                            <option value="sunken">sunken</option>
                            <option value="groove">groove</option>
                            <option value="ridge">ridge</option>
                        </select>--%>
                        <p>State:</p>
                        <%--<input type="text" id="txtButtonTkstate" name="state" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <select id="txtButtonTkstate" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="tk.NORMAL">tk.NORMAL</option>
                            <option value="tk.ACTIVE">tk.ACTIVE</option>
                            <option value="tk.DISABLE">tk.DISABLE</option>
                        </select>
                        <hr />
                        <%--<p>Take Focus:</p>
                        <input type="text" id="txtButtonTktakefocus" name="takefocus" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <p>Text:</p>
                        <input type="text" id="txtButtonTktext" name="text" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%--<p>Text Variable:</p>
                        <input type="text" id="txtButtonTktextvariable" name="textvariable" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>Underline:</p>
                        <input type="text" id="txtButtonTkunderline" name="underline" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <p>Width:</p>
                        <input type="text" id="txtButtonTkwidth" name="width" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%--<p>Wrap Length:</p>
                        <input type="text" id="txtButtonTkwraplength" name="wraplength" class="w-100 txtcajas my-2" onkeydown="return handleKeyDown(event);" />--%>
                    </div>

                    <div id="labelPropPanel" class="container-fluid text-light">

                        <p style="background-color: darkslateblue" class="text-center w-100">Propiedades de Label</p>

                        <p>id</p>
                        <input type="text" name="name" value="" id="txtLabelId" disabled="disabled" class="txtcajas w-100 text-white" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>xz</p>
                        <input type="text" id="txtLabelTKxz" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>yz</p>
                        <input type="text" id="txtLabelTKyz" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>anchor</p>
                        <select id="txtLabelTKanchor" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="tk.N">tk.N</option>
                            <option value="tk.S">tk.S</option>
                            <option value="tk.E">tk.E</option>
                            <option value="tk.W">tk.W</option>
                            <option value="tk.NE">tk.NE</option>
                            <option value="tk.NW">tk.NW</option>
                            <option value="tk.SE">tk.SE</option>
                            <option value="tk.SW">tk.SW</option>
                        </select>
                        <hr />
                        <%--<input type="text" id="txtLabelTKanchor" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <p>bg</p>
                        <input type="color" id="txtLabelTKbg" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>cursor</p>
                        <select id="txtLabelTKcursor" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="arrow">Flecha estándar</option>
                            <option value="hand2">Mano indicando que se puede hacer clic</option>
                            <option value="watch">Reloj indicando que la operación está en progreso</option>
                            <option value="crosshair">Cruz</option>
                            <option value="ibeam">Cursor en forma de "I"</option>
                            <option value="top_left_arrow">Flecha apuntando hacia la esquina superior izquierda</option>
                            <option value="top_right_arrow">Flecha apuntando hacia la esquina superior derecha</option>
                            <option value="bottom_left_arrow">Flecha apuntando hacia la esquina inferior izquierda</option>
                            <option value="bottom_right_arrow">Flecha apuntando hacia la esquina inferior derecha</option>
                            <option value="size_ns">Flecha de cambio de tamaño vertical</option>
                            <option value="size_we">Flecha de cambio de tamaño horizontal</option>
                        </select>
                        <hr />
                        <p>font</p>
                        <select id="txtLabelTKfont" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="Arial">Arial</option>
                            <option value="Helvetica">Helvetica</option>
                            <option value="Times_New_Roman">Times New Roman</option>
                            <option value="Courier_New">Courier New</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Comic_Sans_MS">Comic Sans MS</option>
                        </select>
                        <hr />
                        <%--<input type="text" id="txtLabelTKfont" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <p>fg</p>
                        <input type="color" id="txtLabelTKfg" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>height</p>
                        <input type="text" id="txtLabelTKheight" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%--<p>image</p>
                        <input type="text" id="txtLabelTKimage" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>justify</p>
                        <input type="text" id="txtLabelTKjustify" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%--<p>padx</p>
                        <input type="text" id="txtLabelTKpadx" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>pady</p>
                        <input type="text" id="txtLabelTKpady" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>relief</p>
                        <select id="txtLabelTKrelief" class="w-100 txtcajas" >--%>
                        <%--   <option value="flat">flat</option>
                            <option value="sunken">sunken</option>
                            <option value="raised">raised</option>
                            <option value="groove">groove</option>
                            <option value="ridge">ridge</option>

                        </select>--%>
                        <p>text</p>
                        <input type="text" id="txtLabelTKtext" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%--<p>textvariable</p>
                        <input type="text" id="txtLabelTKtextvarible" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <%-- <p>underline</p>
                        <select id="txtLabelTKunderline" class="w-100 txtcajas" >
                            <option value="0">0</option>
                            <option value="1">1</option>

                        </select>--%>
                        <p>width</p>
                        <input type="text" id="txtLabelTKwidth" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <%-- <p>wraplength</p>
                        <input type="text" id="txtLabelTKwraplength" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                    </div>

                    <div id="textboxPropPanel" class="container-fluid text-light">

                        <p style="background-color: darkseagreen" class="text-center w-100">Propiedades de TextBox</p>


                        <p>idTextbox</p>
                        <input type="text" id="txtTextboxTKidTextbox" class="w-100 txtcajas  text-white" disabled="disabled" />
                        <hr />
                        <p>X</p>
                        <input type="text" id="txtTextboxTKX" name="name" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>y</p>
                        <input type="text" id="txtTextboxTKY" name="name" value="" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Text</p>
                        <input type="text" id="txtTextboxTKText" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Width</p>
                        <input type="text" id="txtTextboxTKWidth" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Height</p>
                        <input type="text" id="txtTextboxTKHeight" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>MaxLength</p>
                        <input type="text" id="txtTextboxTKMaxLength" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Multiline</p>
                        <select id="txtTextboxTKMultiline" class="w-100 txtcajas">
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        <hr />
                        <p>ReadOnly</p>
                        <select id="txtTextboxTKReadOnly" class="w-100 txtcajas">
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        <hr />
                        <%--<p>WordWrap</p>
                        <select id="txtTextboxTKWordWrap" class="w-100 txtcajas" >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>--%>
                        <%--<p>AcceptsTab</p>
                        <select id="txtTextboxTKAcceptsTab" class="w-100 txtcajas" >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>--%>
                        <%--<p>AcceptsReturn</p>
                        <select id="txtTextboxTKAcceptsReturn" class="w-100 txtcajas" >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>--%>
                        <%--<p>HideSelection</p>
                        <select id="txtTextboxTKHideSelection" class="w-100 txtcajas" >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>--%>
                        <%--<p>SelectionStart</p>
                        <input type="text" id="txtTextboxTKSelectionStart" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>SelectionLength</p>
                        <input type="text" id="txtTextboxTKSelectionLength" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />--%>
                        <hr />
                        <p>ScrollBars</p>
                        <select id="txtTextboxTKScrollBars" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        <hr />
                    </div>

                    <div id="checkboxPropPanel" class="container-fluid text-light">

                        <p style="background-color: darkslategrey" class="text-center w-100">Propiedades Checkbox</p>

                        <p>idCheckbox</p>
                        <input type="text" id="txtCheckboxTKidCheckbox" class="w-100 txtcajas text-white" disabled="disabled" />
                        <hr />
                        <p>x</p>
                        <input type="text" id="txtCheckboxTKx" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>y</p>
                        <input type="text" id="txtCheckboxTKy" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>Checked</p>
                        <select id="txtCheckboxTKChecked" class="w-100 txtcajas">
                            <option value="none"></option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        <hr />
                        <p>Text</p>
                        <input type="text" id="txtCheckboxTKText" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <hr />
                        <p>State</p>
                        <select id="txtCheckboxTKState" class="w-100 txtcajas">
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        <hr />
                        <%--<p>OnValue</p>
                        <input type="text" id="txtCheckboxTKOnValue" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>OffValue</p>
                        <input type="text" id="txtCheckboxTKOffValue" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>Variable</p>
                        <input type="text" id="txtCheckboxTKVariable" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>Command</p>
                        <input type="text" id="txtCheckboxTKCommand" class="w-100 txtcajas" onkeydown="return handleKeyDown(event);" />
                        <p>Tristate</p>
                        <select id="txtCheckboxTKTristate" class="w-100 txtcajas" >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>--%>
                    </div>



                </div>

            </div>


            <%-- ------------------------------------------------------------------------------------------------------------------------------ --%>
            <%-- Esta porqueria horrible de aqui es el lienzo principal del editor --%>
            <div class="nav-item col-lg-9 col-md-12 col-sm-12 col-12 limitlienzo mx-2" id="limiteslienzo">

                <div id="lienzo" class="canvaslayer justify-content-center" style="width: 2px; height: 2px;" runat="server">
                </div>

            </div>
            <div class="nav-item col-lg-2 col-md-1 col-sm-12 col-12"></div>


        </div>





        <%--<asp:Button ID="btnTop" runat="server" Text=">>" OnClick="btnTop_Click" />--%>
        <script src="js/bootstrap.min.js"></script>
        <script src="../Scripts/sweetalert.min.js"></script>
        <script src="Editor.js"></script>
        <script src="alertManager.js"></script>
        <div id="idControl" ultimaid=""></div>
        <div class="bg-dark">




            <div class="container-fluid navbar" id="exportPanel">
                <div class="container-fluid nav-item col-12 col-sm-12 col-md-6 col-lg-4" id="outputDiv">
                    <p class="text-center text-white w-100">Salida del Editor</p>
                    <textarea rows="4" cols="50" id="txtOutuputpy" style="height: 500px; overflow: auto;" class="w-100 bg-black outputbox" readonly=""></textarea>
                    <%--<input type="text" name="name" value="" id="txtOutuputpy" readonly="true" aria-multiline="true" style="height: 500px; overflow:auto;" class="w-100 bg-black outputbox" />--%>
                </div>
                <div class="container-fluid nav-item col-12 col-sm-12 col-md-6 col-lg-4" id="GeneratedPyDiv">
                    <p class="text-center text-white w-100">Codigo Generado</p>
                    <%--<input type="textarea" name="name" value="" id="txtpyGenerated" readonly="true" aria-multiline="true" style="height: 500px; overflow:auto;" class="w-100 bg-black outputbox" />--%>
                    <textarea rows="4" cols="50" id="txtpyGenerated" style="height: 500px; overflow: auto;" class="w-100 bg-black outputbox" readonly=""></textarea>
                </div>
                <div class="container-fluid nav-item col-12 col-sm-12 col-md-2 col-lg-4" id="exportDiv">
                    <p class="text-center text-white">Ten en cuenta que se generara codigo del la ultima version guardada y cargada en el editor, por lo que si no te aparece actualizado deberias recargar la pagina.</p>
                    <input type="button" name="name" value="GENERAR CODIGO" id="btnGenCode" class="w-100 botones my-3" onclick="GeneratePython();" />
                    <input type="button" name="name" value="DESCARGAR CODIGO" id="btnDownloadCode" class="w-100 botones my-3" onclick="DownLoad()" />
                    <%--<a href="DownLoad();" id="ADownload" >Descargar Codigo</a>--%>
                </div>
            </div>

        </div>


    </form>
</body>
</html>
