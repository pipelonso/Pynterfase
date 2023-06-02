var selectedItem = 0;
var selectdID = 0;
var initialid = 0;
var selectedType = "";




function startsall() {

    var panelButtonProp = document.getElementById("buttonPropPanel");    
    var propertiesPanel = document.getElementById("propertiesPanel");
    var limitlienzo = document.getElementById("limiteslienzo");
    var infobox = document.getElementById("infobox");
    var elementspanel = document.getElementById("ElementsPanel");
    var botonesdecontrol = document.getElementById("controlPanelSupbar");
    var espaciodor = document.getElementById("espaciadosSupBar");
    var guardardiv = document.getElementById("controlesGuardar");
    var labelPropPanel = document.getElementById("labelPropPanel");    
    var textboxPropPanel = document.getElementById("textboxPropPanel");
    var checkboxPropPanel = document.getElementById("checkboxPropPanel");
    var btnAddTk = document.getElementById("btnAddTk");




    btnAddTk.disabled = true;

    var btnDeleteTk = document.getElementById("btnDeleteTk");
    btnDeleteTk.disabled = true;

    
    propertiesPanel.style.display = "none";
    limitlienzo.style.display = "none";
    infobox.style.display = "none";
    elementspanel.style.display = "none";
    botonesdecontrol.style.display = "none";
    espaciodor.style.display = "none";
    guardardiv.style.display = "none";

    panelButtonProp.style.display = "none";
    labelPropPanel.style.display = "none";
    textboxPropPanel.style.display = "none";
    checkboxPropPanel.style.display = "none";


}

function startEditor() {

    var panelButtonProp = document.getElementById("buttonPropPanel");
    var propertiesPanel = document.getElementById("propertiesPanel");
    var limitlienzo = document.getElementById("limiteslienzo");
    var infobox = document.getElementById("infobox");
    var elementspanel = document.getElementById("ElementsPanel");
    var botonesdecontrol = document.getElementById("controlPanelSupbar");
    var espaciodor = document.getElementById("espaciadosSupBar");
    var guardardiv = document.getElementById("controlesGuardar");


    //panelButtonProp.style.display = "block";
    propertiesPanel.style.display = "block";
    limitlienzo.style.display = "block";
    infobox.style.display = "block";
    elementspanel.style.display = "block";
    botonesdecontrol.style.display = "block";
    espaciodor.style.display = "block";
    guardardiv.style.display = "block";

}


function ShowCreateCavas() {

    var panel = document.getElementById("canvasDimPanel");
    panel.style.display = "block";


}

function HideCreateCanvas() {

    var panel = document.getElementById("canvasDimPanel");
    panel.style.display = "none";
    

}


function ResizeCanvas(x , y) {

    document.getElementById("lienzo").style.width = x + "px";
    document.getElementById("lienzo").style.height = y + "px";

}

function IntoResizeCanvas() {

    var textboxAltura = document.getElementById("txtAltoH");
    var textboxAncho = document.getElementById("txtAnchoH");

    if (textboxAltura.value != "" && textboxAltura.value != null) {

        if (textboxAncho.value != "" && textboxAncho.value != null) {

            console.log(textboxAltura.value + "----" + textboxAncho.value);

            document.getElementById("lienzo").style.width = parseInt(textboxAncho.value) + "px";
            document.getElementById("lienzo").style.height = parseInt(textboxAltura.value) + "px";

        }
        else
        {
            voidall();
        }
    }
    else
    {
        voidall();
    }




}




function setCanvasHeight() {

    
    var contenedorlienzo = document.getElementById("limiteslienzo");
    var contenedorpropiedades = document.getElementById("propertiesPanel");

    var altura = document.body.clientHeight;
    var superbar = document.getElementById("supBar");
    superbar.style.height = "auto";
    var alturasupbar = superbar.style.height;
    console.log("altura barSup: " + alturasupbar);
    contenedorlienzo.style.height = parseInt(altura) - 300 + "px";
    contenedorpropiedades.style.height = parseInt(altura) - 300 + "px";
    console.log(altura + " --- " + contenedorlienzo.style.height);
    


}

function CloseEditWindowSizePanel()
{
    var panel = document.getElementById("editWindowSizePanel");
    panel.style.display = "none";


}

function OpenEditWindowSizePanel() {

    var panel = document.getElementById("editWindowSizePanel");
    panel.style.display = "block";

}


function setselectedButton() {

    selectedItem = 1;
    var textchage = document.getElementById("lblSelected");
    textchage.innerHTML = "AGREGAR BOTON";

    var btnAddTk = document.getElementById("btnAddTk");

    btnAddTk.disabled = false;


}

function setselectedLabel() {

    selectedItem = 2;
    var textchage = document.getElementById("lblSelected");
    textchage.innerHTML = "AGREGAR LABEL"; 

    var btnAddTk = document.getElementById("btnAddTk");

    btnAddTk.disabled = false;

}

function setselectedTextbox() {

    selectedItem = 3;
    var textchage = document.getElementById("lblSelected");
    textchage.innerHTML = "AGREGAR TEXTBOX";

    var btnAddTk = document.getElementById("btnAddTk");

    btnAddTk.disabled = false;

}

function setSelectedCheckbox() {

    selectedItem = 4;
    var textchage = document.getElementById("lblSelected");
    textchage.innerHTML = "AGREGAR CHECKBOX";

    var btnAddTk = document.getElementById("btnAddTk");

    btnAddTk.disabled = false;


}

var botontk;




function AddTKElement() {

    var panelButtonProp = document.getElementById("buttonPropPanel");
    var labelPropPanel = document.getElementById("labelPropPanel");
    var textboxPropPanel = document.getElementById("textboxPropPanel");
    var checkboxPropPanel = document.getElementById("checkboxPropPanel");

    var btnDeleteTk = document.getElementById("btnDeleteTk");
    btnDeleteTk.disabled = false;
    var idControl = document.getElementById("idControl");

    if (selectedItem == 1) {

        selectedType = "b"; //Recordatorio del demonio, poner esta cosa en todos justificando el tipo
        var btnAddTk = document.getElementById("btnAddTk");
        btnAddTk.disabled = true;
        panelButtonProp.style.display = "block";
        labelPropPanel.style.display = "none";
        checkboxPropPanel.style.display = "none";
        textboxPropPanel.style.display = "none";

        //Creacion del boton
                

        botontk = document.createElement("div");
        var divlienzo = document.getElementById("lienzo");
        
 
        botontk.style.height = "30px";
        /*botontk.style.width = "100px";*/
        botontk.style.padding = "0px";
        botontk.style.margin = "0px";
        botontk.style.marginBottom = "0px";
        botontk.classList.add("TKbuttonBase");        
        botontk.classList.add("FadeInAnim");        
        


        var pid = document.createElement("p");
        var ptipo = document.createElement("p");
        //b = boton 
        initialid += 1;
        botontk.id = "b" + initialid; //La primera letra en el padre significa el tipo de objeto que es

        idControl.setAttribute("ultimaid",initialid);
        var txtidbutton = document.getElementById("txtButtonId"); //Aqui esta el valor que se remplaza en el panel de propiedades


        pid.textContent = initialid;
        pid.id = "ib" + initialid; //la segunda letra en un hijo significa el tipo que es su padre
        pid.style.display = "none";
        txtidbutton.value = pid.textContent;

        
        var textchage = document.getElementById("lblSelected");
        textchage.innerHTML = "---";

        
        pid.style.fontSize = "8px";
        ptipo.textContent = "button";
        ptipo.id = "tb" + initialid; //la segunda letra en un hijo significa el tipo que es su padre
        ptipo.style.fontSize = "7px";
        ptipo.style.position = "relative";
        ptipo.style.top = "-32px";
        ptipo.classList.add("text-center");

        var btnText = document.createElement("p");
        btnText.id = "xb" + initialid;
        btnText.textContent = "Press Me";
        btnText.style.textAlign = "center";
        btnText.style.color = "rgb(0,0,0)";

        ptipo.style.display = "none";

        botontk.style.position = "absolute"; //absolute
        botontk.style.top = "-1px";
        botontk.style.left = "-1px";
        botontk.appendChild(pid);
        botontk.appendChild(btnText);
        botontk.appendChild(ptipo);
        divlienzo.appendChild(botontk);



    } else if (selectedItem == 2) {
        selectedType = "l"; //Recordatorio del demonio, poner esta cosa en todos justificando el tipo
        var btnAddTk = document.getElementById("btnAddTk");
        btnAddTk.disabled = true;
        labelPropPanel.style.display = "block";
        panelButtonProp.style.display = "none";
        checkboxPropPanel.style.display = "none";
        textboxPropPanel.style.display = "none";

        initialid += 1;

        var textchage = document.getElementById("lblSelected");
        textchage.innerHTML = "---";


        //creacion del label


        var labelTk = document.createElement("div");
        var divlienzo = document.getElementById("lienzo");

        labelTk.style.height = "30px";
        labelTk.classList.add("FadeInAnim");
        labelTk.id = "l" + initialid;

        



        var ptipo = document.createElement("p");
        var pid = document.createElement("p");
        var ptext = document.createElement("p");

        labelTk.classList.add("TkLabelBase");

        ptipo.textContent = "label";
        ptipo.style.fontSize = "7px";
        ptipo.id = "tl" + initialid;
        ptipo.style.position = "relative";
        ptipo.style.top = "-32px";
        ptipo.classList.add("text-center");
        ptipo.style.display = "none";

        pid.textContent = initialid;
        pid.id = "il" + initialid;
        pid.style.fontSize = "8px";
        pid.style.display = "none";


        var txtidLabel = document.getElementById("txtLabelId");  //asignación del id al lienzo -------------------------------------
        txtidLabel.value = pid.textContent;

        ptext.textContent = "---";
        ptext.style.position = "relative";
        ptext.id = "xl" + initialid;
        ptext.style.color = "rgb(0,0,0)";
        //ptext.style.top = "-55px";

        labelTk.style.position = "absolute"; //absolute
        labelTk.style.left = "1px";
        labelTk.style.top = "1px";
        divlienzo.appendChild(labelTk);
        
        labelTk.appendChild(pid);
        labelTk.appendChild(ptipo);
        labelTk.appendChild(ptext);





    } else if (selectedItem == 3) { //textbox
        selectedType = "x"; //Recordatorio del demonio, poner esta cosa en todos justificando el tipo

        var btnAddTk = document.getElementById("btnAddTk");
        btnAddTk.disabled = true;
        textboxPropPanel.style.display = "block";
        labelPropPanel.style.display = "none";
        panelButtonProp.style.display = "none";
        checkboxPropPanel.style.display = "none";

        initialid += 1;

        var textchage = document.getElementById("lblSelected");
        textchage.innerHTML = "---";

        var textbox = document.createElement("div");
        textbox.style.left = "0px"
        textbox.style.top = "0px"
        
        
        var divlienzo = document.getElementById("lienzo");

        var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");  //asignación del id al lienzo -------------------------------------
        txtTextboxTKidTextbox.value = initialid;


        textbox.id = "x" + initialid;
        textbox.classList.add("FadeInAnim");
        textbox.classList.add("TKtextboxBase");
        textbox.style.width = "150px";
        textbox.style.height = "25px";
        textbox.style.position = "absolute";
        var ptext = document.createElement("p");
        ptext.id = "px" + initialid;


        textbox.appendChild(ptext);
        divlienzo.appendChild(textbox);




    } else if (selectedItem == 4) {

        selectedType = "c"; //Recordatorio del demonio, poner esta cosa en todos justificando el tipo
        var btnAddTk = document.getElementById("btnAddTk");
        btnAddTk.disabled = true;
        checkboxPropPanel.style.display = "block";
        labelPropPanel.style.display = "none";
        panelButtonProp.style.display = "none";
        textboxPropPanel.style.display = "none";

        initialid += 1;

        var textchage = document.getElementById("lblSelected");
        textchage.innerHTML = "---";

        var newckeckbox = document.createElement("div");
        var divlienzo = document.getElementById("lienzo");

        newckeckbox.id = "c" + initialid;

        var txtCheckboxTKidCheckbox = document.getElementById("txtCheckboxTKidCheckbox");  //asignación del id al lienzo -------------------------------------
        txtCheckboxTKidCheckbox.value = initialid;

        newckeckbox.classList.add("navbar")
        newckeckbox.classList.add("chekers");
        newckeckbox.style.padding = "0px";
        newckeckbox.style.margin = "0px";
        newckeckbox.style.position = "absolute";
        var checkindicator = document.createElement("div");
        checkindicator.style.width = "15px";
        checkindicator.style.height = "15px";
        checkindicator.classList.add("checkindicatorInactive");
        checkindicator.classList.add("nav-item");
        checkindicator.id = "sc" + initialid;
        checkindicator.style.padding = "0px";
        

        var textcheck = document.createElement("p");
        textcheck.textContent = "---"
        textcheck.classList.add("nav-item");
        textcheck.id = "tc" + initialid;
        textcheck.style.fontSize = "15px";
        newckeckbox.classList.add("FadeInAnim");
        newckeckbox.style.left = "0px";
        newckeckbox.style.top = "0px";
        newckeckbox.appendChild(checkindicator);
        newckeckbox.appendChild(textcheck);
        


        //newckeckbox.style.width = "200px";
        divlienzo.appendChild(newckeckbox);



    }
    else
    {

        console.log("Esto no deberia ocurrir");

    } 





}



function handleKeyDown(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario de envío
        var input = event.target.value; // Obtén el valor del campo de texto
        console.log(input); // Realiza alguna acción con el valor (en este caso, lo imprime en la consola)
        return false; // Evita que se realice el envío del formulario
    }
}





function applyChanges() {

    if (selectedType == "b" || selectedType.slice(1) == "b") { //verifica si el valor seleccionado es un boton

        var txtXbuttonTK = document.getElementById("txtXButtonTK");
        var txtIDbutton = document.getElementById("txtButtonId");
        var txtYbuttonTk = document.getElementById("txtYbuttonTk");
        //var txtABGbuttonTk = document.getElementById("txtABGbuttonTk"); //Descart
        //var txtAFGbuttonTk = document.getElementById("txtAFGbuttonTk"); //Descart
        var txtanchorbuttonTk = document.getElementById("txtanchorbuttonTk");
        var txtBGbuttonTK = document.getElementById("txtBGbuttonTK");
        var ComboBitmap = document.getElementById("ComboBitmap");
        var txtBorderWidthbuttonTK = document.getElementById("txtBorderWidthbuttonTK");
        var comboCompound = document.getElementById("comboCompound");
        var comboCursor = document.getElementById("comboCursor");
        //var comboDefaultbtn = document.getElementById("comboDefaultbtn");  //Descart
        //var comboDisableForegroundbtn = document.getElementById("comboDisableForegroundbtn"); //Descart
        var comboFontBtn = document.getElementById("comboFontBtn");
        var txtButtonTkforeground = document.getElementById("txtButtonTkforeground");
        var txtButtonTkheight = document.getElementById("txtButtonTkheight");
        //var txtButtonTkhighlightbackground = document.getElementById("txtButtonTkhighlightbackground"); //descart
        //var txtButtonTkhighlightcolor = document.getElementById("txtButtonTkhighlightcolor");    //Descart
        //var txtButtonTkhighlightthickness = document.getElementById("txtButtonTkhighlightthickness"); //Descart
        //var txtButtonTkimage = document.getElementById("txtButtonTkimage"); //descart
        //var txtButtonTkjustify = document.getElementById("txtButtonTkjustify"); //Combo descart
        //var txtButtonTkpadx = document.getElementById("txtButtonTkpadx"); //descart
        //var txtButtonTkpady = document.getElementById("txtButtonTkpady"); //Descart
        //var txtButtonTkrelief = document.getElementById("txtButtonTkrelief"); //Combo Descart
        var txtButtonTkstate = document.getElementById("txtButtonTkstate"); 
        //var txtButtonTktakefocus = document.getElementById("txtButtonTktakefocus"); //Descart
        var txtButtonTktext = document.getElementById("txtButtonTktext");
        //var txtButtonTktextvariable = document.getElementById("txtButtonTktextvariable"); //Descart
        //var txtButtonTkunderline = document.getElementById("txtButtonTkunderline"); //descart
        var txtButtonTkwidth = document.getElementById("txtButtonTkwidth");
        //var txtButtonTkwraplength = document.getElementById("txtButtonTkwraplength"); //Descart

        if (txtXbuttonTK.value != null) {

            document.getElementById("b" + txtIDbutton.value).style.left = txtXbuttonTK.value + "px";
            
        }

        if (txtYbuttonTk.value != null) {

            document.getElementById("b" + txtIDbutton.value).style.top = txtYbuttonTk.value + "px";            

        }

        //if (txtABGbuttonTk.value != null ) { //hacer que esto se guarde en otro elemento, el background remplaza su valor por defecto

        //    document.getElementById("b" + txtIDbutton.value).style.backgroundColor = txtABGbuttonTk.value;

        //}

        //if (txtAFGbuttonTk.value != null) {

        //    document.getElementById("xb" + initialid).style.color = txtAFGbuttonTk.value;

        //} 

        if (txtanchorbuttonTk.value != "none") {

            //<select id="txtanchorbuttonTk" class="txtcajas w-100">
            //    <option value="none"></option>
            //    <option value="tk.N">tk.N</option>
            //    <option value="tk.S">tk.S</option>
            //    <option value="tk.E">tk.E</option>
            //    <option value="tk.W">tk.W</option>
            //    <option value="tk.NE">tk.NE</option>
            //    <option value="tk.NW">tk.NW</option>
            //    <option value="tk.SE">tk.SE</option>
            //    <option value="tk.SW">tk.SW</option>
            //</select>

            if (txtanchorbuttonTk.value == "tk.N") {

                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.top = "0px";
                document.getElementById("xb" + txtIDbutton.value).style.left = "50%";
                document.getElementById("xb" + txtIDbutton.value).style.transform = "translateX(-50%)";
                
            }

            if (txtanchorbuttonTk.value == "tx.S") {
                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.bottom = "0px";
                document.getElementById("xb" + txtIDbutton.value).style.left = "50%";
                document.getElementById("xb" + txtIDbutton.value).style.transform = "translateX(-50%)";
            }

            if (txtanchorbuttonTk.value == "tx.E") {
                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.top = "50%";
                document.getElementById("xb" + txtIDbutton.value).style.right = "0%";
                document.getElementById("xb" + txtIDbutton.value).style.transform = "translateY(-50%)";
                document.getElementById("xb" + txtIDbutton.value).style.textAlign = "right";
            }

            if (txtanchorbuttonTk.value == "tx.W") {
                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.top = "50%";
                document.getElementById("xb" + txtIDbutton.value).style.left = "0%";
                document.getElementById("xb" + txtIDbutton.value).style.transform = "translateY(-50%)";
                document.getElementById("xb" + txtIDbutton.value).style.textAlign = "left";
            }

            if (txtanchorbuttonTk.value == "tx.NE") {
                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.top = "0%";
                document.getElementById("xb" + txtIDbutton.value).style.right = "0%";
                
            }

            if (txtanchorbuttonTk.value == "tx.NW") {
                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.top = "0%";
                document.getElementById("xb" + txtIDbutton.value).style.left = "0%";
                
            }
            if (txtanchorbuttonTk.value == "tx.SE") {
                document.getElementById("xb" + initialid).style.position = "absolute";
                document.getElementById("xb" + initialid).style.bottom = "0%";
                document.getElementById("xb" + initialid).style.right = "0%";
            }

            if (txtanchorbuttonTk.value == "tx.SW") {
                document.getElementById("xb" + txtIDbutton.value).style.position = "absolute";
                document.getElementById("xb" + txtIDbutton.value).style.bottom = "0%";
                document.getElementById("xb" + txtIDbutton.value).style.left = "0%";
            }

        }

        if (txtBGbuttonTK.value != null) {

            document.getElementById("b" + txtIDbutton.value).style.backgroundColor = txtBGbuttonTK.value;

        }

        if (ComboBitmap.value != "none") {

            //<select id="ComboBitmap" class="txtcajas w-100">
            //    <option value="none"></option>
            //    <option value="error">error</option>
            //    <option value="gray75">gray75</option>
            //    <option value="gray50">gray50</option>
            //    <option value="gray25">gray25</option>
            //    <option value="gray12">gray12</option>
            //    <option value="hourglass">hourglass</option>
            //    <option value="info">info</option>
            //    <option value="questhead">questhead</option>
            //    <option value="question">question</option>
            //    <option value="warning">warning</option>
            //</select>

            //Falta hacer cada bitmap


        }

        if (txtBorderWidthbuttonTK.value != null && txtBorderWidthbuttonTK.value != "") {

            document.getElementById("b" + txtIDbutton.value).style.borderWidth = txtBorderWidthbuttonTK.value + "px";

        } 

        if (comboCompound.value != "none") {

            //Falta programar bien esto

        }

        if (comboCursor.value != "none") {

            //<select id="comboCursor" class="txtcajas w-100">
            //    <option value="none"></option>
            //    <option value="arrow">Flecha estándar</option>
            //    <option value="hand2">Mano indicando que se puede hacer clic</option>
            //    <option value="watch">Reloj indicando que la operación está en progreso</option>
            //    <option value="crosshair">Cruz</option>
            //    <option value="ibeam">Cursor en forma de "I"</option>
            //    <option value="top_left_arrow">Flecha apuntando hacia la esquina superior izquierda</option>
            //    <option value="top_right_arrow">Flecha apuntando hacia la esquina superior derecha</option>
            //    <option value="bottom_left_arrow">Flecha apuntando hacia la esquina inferior izquierda</option>
            //    <option value="bottom_right_arrow">Flecha apuntando hacia la esquina inferior derecha</option>
            //    <option value="size_ns">Flecha de cambio de tamaño vertical</option>
            //    <option value="size_we">Flecha de cambio de tamaño horizontal</option>
            //</select>

            if (comboCursor.value == "arrow") {

                document.getElementById("b" + txtIDbutton.value).classList.add("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "hand2") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.add("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "watch") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.add("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "crosshair") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.add("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "ibean") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.add("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "top_left_arrow") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.add("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "top_right_arrow") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.add("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "bottom_left_arrow") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.add("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "bottom_right_arrow") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.add("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");
                
            }

            if (comboCursor.value == "size_ns") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.add("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_we");

            }

            if (comboCursor.value == "size_we") {

                document.getElementById("b" + txtIDbutton.value).classList.remove("arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("hand2");
                document.getElementById("b" + txtIDbutton.value).classList.remove("watch");
                document.getElementById("b" + txtIDbutton.value).classList.remove("crosshair");
                document.getElementById("b" + txtIDbutton.value).classList.remove("ibean");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtIDbutton.value).classList.remove("size_ns");
                document.getElementById("b" + txtIDbutton.value).classList.add("size_we");

            }


        }

        //if (comboDefaultbtn.value != "none") { //boton por defecto --------------------------------------------

        //    //<select id="comboDefaultbtn" class="w-100 txtcajas">
        //    //    <option value="none"></option>
        //    //    <option value="normal">normal</option>
        //    //    <option value="active">active</option>
        //    //</select>


        //    if (comboDefaultbtn.value == "normal") {

        //        document.getElementById("b" + txtIDbutton.value).classList.add("default_normal"); //tkinter.NORMAL
        //        document.getElementById("b" + txtIDbutton.value).classList.remove("default_active"); //tkinter.ACTIVE

        //    }

        //    if (comboDefaultbtn.value == "active") {

        //        document.getElementById("b" + txtIDbutton.value).classList.remove("default_normal");
        //        document.getElementById("b" + txtIDbutton.value).classList.add("default_active");

        //    } 



        //}

        //if (comboDisableForegroundbtn.value != "none") {

        //    //falta crear elemento que almacene este estado, es un color

        //}

        if (comboFontBtn.value != "none") {

            console.log("fijado: " + comboFontBtn.value);

            //<select id="comboFontBtn" class="txtcajas w-100">
            //    <option value="none"></option>
            //    <option value="Arial">Arial</option>
            //    <option value="Helvetica">Helvetica</option>
            //    <option value="Times New Roman">Times New Roman</option>
            //    <option value="Courier New">Courier New</option>
            //    <option value="Verdana">Verdana</option>
            //    <option value="Georgia">Georgia</option>
            //    <option value="Comic Sans MS">Comic Sans MS</option>
            //</select>

            if (comboFontBtn.value == "Arial") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "Arial";

            }
            if (comboFontBtn.value == "Helvetica") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "Helvetica";

            }
            if (comboFontBtn.value == "Times_New_Roman") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "\"Times New Roman\"";

            }
            if (comboFontBtn.value == "Courier_New") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "\"Courier New\"";

            }
            if (comboFontBtn.value == "Verdana") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "Verdana";

            }
            if (comboFontBtn.value == "Georgia") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "Georgia";

            }
            if (comboFontBtn.value == "Comic_Sans_MS") {

                document.getElementById("xb" + txtIDbutton.value).style.fontFamily = "\"Comic Sans MS\"";

            }


        }

        if (txtButtonTkforeground.value != null && txtButtonTkforeground.value != "") {

            document.getElementById("xb" + txtIDbutton.value).style.color = txtButtonTkforeground.value;

        }

        if (txtButtonTkheight.value != null && txtButtonTkheight.value != "") {

            document.getElementById("b" + txtIDbutton.value).style.height = txtButtonTkheight.value + "px";

        }

        if (txtButtonTkwidth.value != null && txtButtonTkwidth.value != "") {

            document.getElementById("b" + txtIDbutton.value).style.width = txtButtonTkwidth.value + "px";

        }


        //if (txtButtonTkhighlightbackground.value != null) {

        //    //falta crear elemento que almacene este valor

        //}

        //if (txtButtonTkhighlightcolor.value != null) {

        //    //falta crear elemento que almacene este valor

        //}

        if (txtButtonTktext.value != null && txtButtonTktext.value != "") {

            document.getElementById("xb" + txtIDbutton.value).textContent = txtButtonTktext.value;

        }

        if (txtButtonTkstate.value != null && txtButtonTkstate.value != "") {



        } 

    } //Fin verificacion de boton

    if (selectedType == "l" || selectedType.slice(1) == "l") { //Comienzo verificación label

        var txtLabelId = document.getElementById("txtLabelId");
        var txtLabelTKxz = document.getElementById("txtLabelTKxz");
        var txtLabelTKyz = document.getElementById("txtLabelTKyz");
        var txtLabelTKanchor = document.getElementById("txtLabelTKanchor"); //combo
        var txtLabelTKbg = document.getElementById("txtLabelTKbg");
        var txtLabelTKcursor = document.getElementById("txtLabelTKcursor"); //Combo
        var txtLabelTKfont = document.getElementById("txtLabelTKfont"); //Combo
        var txtLabelTKfg = document.getElementById("txtLabelTKfg");
        var txtLabelTKheight = document.getElementById("txtLabelTKheight");
        var txtLabelTKtext = document.getElementById("txtLabelTKtext");
        var txtLabelTKwidth = document.getElementById("txtLabelTKwidth");

        if (txtLabelTKxz.value != null && txtLabelTKxz.value != "") {

            document.getElementById("l" + txtLabelId.value).style.left = txtLabelTKxz.value + "px";

        }

        if (txtLabelTKyz.value != null && txtLabelTKyz.value != "") {

            document.getElementById("l" + txtLabelId.value).style.top = txtLabelTKyz.value + "px";

        }

        if (txtLabelTKanchor.value != "none" && txtLabelTKanchor.value != "") {

            if (txtLabelTKanchor.value == "tk.N") {

                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.top = "0px";
                document.getElementById("xl" + txtLabelId.value).style.left = "50%";
                document.getElementById("xl" + txtLabelId.value).style.transform = "translateX(-50%)";

            }

            if (txtLabelTKanchor.value == "tx.S") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.bottom = "0px";
                document.getElementById("xl" + txtLabelId.value).style.left = "50%";
                document.getElementById("xl" + txtLabelId.value).style.transform = "translateX(-50%)";
            }

            if (txtLabelTKanchor.value == "tx.E") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.top = "50%";
                document.getElementById("xl" + txtLabelId.value).style.right = "0%";
                document.getElementById("xl" + txtLabelId.value).style.transform = "translateY(-50%)";
                document.getElementById("xl" + txtLabelId.value).style.textAlign = "right";
            }

            if (txtLabelTKanchor.value == "tx.W") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.top = "50%";
                document.getElementById("xl" + txtLabelId.value).style.left = "0%";
                document.getElementById("xl" + txtLabelId.value).style.transform = "translateY(-50%)";
                document.getElementById("xl" + txtLabelId.value).style.textAlign = "left";
            }

            if (txtLabelTKanchor.value == "tx.NE") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.top = "0%";
                document.getElementById("xl" + txtLabelId.value).style.right = "0%";

            }

            if (txtLabelTKanchor.value == "tx.NW") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.top = "0%";
                document.getElementById("xl" + txtLabelId.value).style.left = "0%";

            }
            if (txtLabelTKanchor.value == "tx.SE") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.bottom = "0%";
                document.getElementById("xl" + txtLabelId.value).style.right = "0%";
            }

            if (txtLabelTKanchor.value == "tx.SW") {
                document.getElementById("xl" + txtLabelId.value).style.position = "absolute";
                document.getElementById("xl" + txtLabelId.value).style.bottom = "0%";
                document.getElementById("xl" + txtLabelId.value).style.left = "0%";
            }

        }

        if (txtLabelTKbg.value != null && txtLabelTKbg.value != "") {

            document.getElementById("l" + txtLabelId.value).style.backgroundColor = txtLabelTKbg.value;

        }

        if (txtLabelTKcursor.value != "none" && txtLabelTKcursor.value != "") {

            if (txtLabelTKcursor.value == "arrow") {

                document.getElementById("l" + txtLabelId.value).classList.add("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "hand2") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.add("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "watch") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.add("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "crosshair") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.add("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "ibean") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.add("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "top_left_arrow") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.add("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "top_right_arrow") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.add("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "bottom_left_arrow") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.add("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "bottom_right_arrow") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.add("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "size_ns") {

                document.getElementById("l" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("l" + txtLabelId.value).classList.remove("watch");
                document.getElementById("l" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("l" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("l" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("l" + txtLabelId.value).classList.add("size_ns");
                document.getElementById("l" + txtLabelId.value).classList.remove("size_we");

            }

            if (txtLabelTKcursor.value == "size_we") {

                document.getElementById("b" + txtLabelId.value).classList.remove("arrow");
                document.getElementById("b" + txtLabelId.value).classList.remove("hand2");
                document.getElementById("b" + txtLabelId.value).classList.remove("watch");
                document.getElementById("b" + txtLabelId.value).classList.remove("crosshair");
                document.getElementById("b" + txtLabelId.value).classList.remove("ibean");
                document.getElementById("b" + txtLabelId.value).classList.remove("top_left_arrow");
                document.getElementById("b" + txtLabelId.value).classList.remove("top_right_arrow");
                document.getElementById("b" + txtLabelId.value).classList.remove("bottom_left_arrow");
                document.getElementById("b" + txtLabelId.value).classList.remove("bottom_right_arrow");
                document.getElementById("b" + txtLabelId.value).classList.remove("size_ns");
                document.getElementById("b" + txtLabelId.value).classList.add("size_we");

            }



        }

        if (txtLabelTKfont.value != "none" && txtLabelTKfont.value != "") {

            if (txtLabelTKfont.value == "Arial") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "Arial";

            }
            if (txtLabelTKfont.value == "Helvetica") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "Helvetica";

            }
            if (txtLabelTKfont.value == "Times_New_Roman") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "\"Times New Roman\"";

            }
            if (txtLabelTKfont.value == "Courier_New") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "\"Courier New\"";

            }
            if (txtLabelTKfont.value == "Verdana") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "Verdana";

            }
            if (txtLabelTKfont.value == "Georgia") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "Georgia";
                //.replace(/_/g, " ")
            }
            if (txtLabelTKfont.value == "Comic_Sans_MS") {

                document.getElementById("xl" + txtLabelId.value).style.fontFamily = "\"Comic Sans MS\"";
            }
        }

        if (txtLabelTKfg.value != null && txtLabelTKfg.value != "") {

            document.getElementById("xl" + txtLabelId.value).style.color = txtLabelTKfg.value;

        }

        if (txtLabelTKheight.value != null && txtLabelTKheight.value != "") {

            document.getElementById("l" + txtLabelId.value).style.height = txtLabelTKheight.value;

        }

        if (txtLabelTKtext.value != null && txtLabelTKtext.value != "") {

            document.getElementById("xl" + txtLabelId.value).textContent = txtLabelTKtext.value;

        }

        if (txtLabelTKwidth.value != null && txtLabelTKwidth.value != "") {

            document.getElementById("l" + txtLabelId.value).style.width = txtLabelTKwidth.value;

        }        
        
    }//Fin verificacion label

    if (selectedType == "x" || selectedType.slice(1) == "x") { //Verificación de textkbox



        var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");
        var txtTextboxTKX = document.getElementById("txtTextboxTKX");
        var txtTextboxTKY = document.getElementById("txtTextboxTKY");

        var txtTextboxTKText = document.getElementById("txtTextboxTKText");
        var txtTextboxTKWidth = document.getElementById("txtTextboxTKWidth");
        var txtTextboxTKHeight = document.getElementById("txtTextboxTKHeight");
        var txtTextboxTKMaxLength = document.getElementById("txtTextboxTKMaxLength");
        var txtTextboxTKMultiline = document.getElementById("txtTextboxTKMultiline");
        var txtTextboxTKReadOnly = document.getElementById("txtTextboxTKReadOnly");
        var txtTextboxTKScrollBars = document.getElementById("txtTextboxTKScrollBars");


        if (txtTextboxTKX.value != null && txtTextboxTKX.value != "") {

            document.getElementById("x" + txtTextboxTKidTextbox.value).style.left = txtTextboxTKX.value + "px";

        }
        if (txtTextboxTKY.value != null && txtTextboxTKY.value != "") {

            document.getElementById("x" + txtTextboxTKidTextbox.value).style.top = txtTextboxTKY.value + "px";

        }

        if (txtTextboxTKText.value != null && txtTextboxTKText.value != "") {

            document.getElementById("px" + txtTextboxTKidTextbox.value).textContent = txtTextboxTKText.value;

        }
        if (txtTextboxTKWidth.value != null && txtTextboxTKWidth.value != "") {

            document.getElementById("x" + txtTextboxTKidTextbox.value).style.width = txtTextboxTKWidth.value + "px";

        }
        if (txtTextboxTKHeight.value != null && txtTextboxTKHeight.value != "") {

            document.getElementById("x" + txtTextboxTKidTextbox.value).style.height = txtTextboxTKHeight.value + "px";

        }
        if (txtTextboxTKMaxLength.value != null && txtTextboxTKMaxLength.value != "") {



        }
        if (txtTextboxTKMultiline.value != null && txtTextboxTKMultiline.value != "") {

            //falta

        }
        if (txtTextboxTKReadOnly.value != null && txtTextboxTKReadOnly.value != "") {

            //falta

        }
        if (txtTextboxTKScrollBars.value != null && txtTextboxTKScrollBars.value != "") {

            //falta

        }
        
    }//Fin verificacion textbox

    if (selectedType == "c" || selectedType.slice(1) == "c") { //Comienzo verificacion checkbox

        var txtCheckboxTKidCheckbox = document.getElementById("txtCheckboxTKidCheckbox");
        var txtCheckboxTKx = document.getElementById("txtCheckboxTKx");
        var txtCheckboxTKy = document.getElementById("txtCheckboxTKy");
        var txtCheckboxTKChecked = document.getElementById("txtCheckboxTKChecked");
        var txtCheckboxTKText = document.getElementById("txtCheckboxTKText");
        var txtCheckboxTKState = document.getElementById("txtCheckboxTKState");           

        if (txtCheckboxTKx.value != null && txtCheckboxTKx.value != "") {

            document.getElementById("c" + txtCheckboxTKidCheckbox.value).style.left = txtCheckboxTKx.value + "px";

        }
        if (txtCheckboxTKy.value != null && txtCheckboxTKy.value != "") {

            document.getElementById("c" + txtCheckboxTKidCheckbox.value).style.top = txtCheckboxTKy.value + "px";

        }
        if (txtCheckboxTKChecked.value != "none" && txtCheckboxTKChecked.value != "") {

            if (txtCheckboxTKChecked.value == "true") {

                document.getElementById("sc" + txtCheckboxTKidCheckbox.value).classList.remove("checkindicatorInactive");
                document.getElementById("sc" + txtCheckboxTKidCheckbox.value).classList.add("checkindicatorActive");

            } else {
                document.getElementById("sc" + txtCheckboxTKidCheckbox.value).classList.remove("checkindicatorActive");
                document.getElementById("sc" + txtCheckboxTKidCheckbox.value).classList.add("checkindicatorInactive");               
            }

            


        }
        if (txtCheckboxTKText.value != null && txtCheckboxTKText.value != "") {

            document.getElementById("tc" + txtCheckboxTKidCheckbox.value).textContent = txtCheckboxTKText.value;

        }
        if (txtCheckboxTKState.value != null && txtCheckboxTKState.value != "") {

        }
        




    }//Fin verificación checkbox


}

var lienzodivpanel = document.getElementById("lienzo");

lienzodivpanel.addEventListener("click", function (event) {

    var target = event.target;
    if (target.id != "lienzo") {

        var btnDeleteTk = document.getElementById("btnDeleteTk");
        btnDeleteTk.disabled = false;

        var panelButtonProp = document.getElementById("buttonPropPanel");
        var labelPropPanel = document.getElementById("labelPropPanel");
        var textboxPropPanel = document.getElementById("textboxPropPanel");
        var checkboxPropPanel = document.getElementById("checkboxPropPanel");


        //adquirir el id y tipo del elemento
        var id = target.id;
        var parseid = id.slice(1);
        selectedType = id.charAt(0);

        if (id.charAt(1) == "b") { //revisa si es un hijo de boton

            selectedType = id.charAt(1);
            console.log("Tipo seleccionado: " + selectedType);

        }

        if (id.charAt(1) == "l") { //revisa si es un hijo de label

            selectedType = id.charAt(1);
            console.log(selectedType);

        }

        if (id.charAt(1) == "x") { //revisa si es un hijo de textbox

            selectedType = id.charAt(1);
            console.log(selectedType);

        }

        if (id.charAt(1) == "c") { //revisa si es un hijo de checkbox

            selectedType = id.charAt(1);
            console.log(selectedType);

        }



        console.log("ID del div: " + parseid);

        if (selectedType == "b" || selectedType.slice(1) == "b") { //Este solo se ejecuta cuando el item seleccionado es el boton o es hijo del boton

            panelButtonProp.style.display = "block";
            labelPropPanel.style.display = "none";
            checkboxPropPanel.style.display = "none";
            textboxPropPanel.style.display = "none";

            if (id.charAt(1) == "b") { //Verificación primaria de clic en hijo del boton

                var txtidbutton = document.getElementById("txtButtonId");
                txtidbutton.value = id.slice(2);
                var txtXButtonTK = document.getElementById("txtXButtonTK");
                txtXButtonTK.value = parseInt(document.getElementById("b" + id.slice(2)).style.left)
                var txtYbuttonTk = document.getElementById("txtYbuttonTk");
                txtYbuttonTk.value = parseInt(document.getElementById("b" + id.slice(2)).style.top);
                var txtanchorbuttonTk = document.getElementById("txtanchorbuttonTk"); //Falta agregar parametro al elemento
                var txtBGbuttonTK = document.getElementById("txtBGbuttonTK");
                //console.log("Color de fondo: " + rgbConvertHex(document.getElementById("b" + id.slice(2)).style.backgroundColor.toString()));
                txtBGbuttonTK.value = rgbConvertHex(document.getElementById("b" + id.slice(2)).style.backgroundColor.toString());
                var txtBorderWidthbuttonTK = document.getElementById("txtBorderWidthbuttonTK");
                txtBorderWidthbuttonTK.value = parseInt(document.getElementById("b" + id.slice(2)).style.borderWidth);
                var comboFontBtn = document.getElementById("comboFontBtn");
                var getStringfont = document.getElementById("xb" + id.slice(2)).style.fontFamily;
                console.log("fontFamily: " + document.getElementById("xb" + id.slice(2)).style.fontFamily);

                if (getStringfont == "Arial") {

                    comboFontBtn.value = "Arial";

                }

                if (getStringfont == "Helvetica") {

                    comboFontBtn.value = "Helvetica";

                }

                if (getStringfont == "Times New Roman") { //falla

                    comboFontBtn.value = "Times_New_Roman";

                }

                if (getStringfont == "Courier New") { //falla

                    comboFontBtn.value = "Courier_New";

                }

                if (getStringfont == "Verdana") {

                    comboFontBtn.value = "Verdana";

                }

                if (getStringfont == "Georgia") {

                    comboFontBtn.value = "Georgia";

                }

                if (getStringfont == "Comic Sans MS") { //falla

                    comboFontBtn.value = "Comic_Sans_MS";

                }

                var txtButtonTkforeground = document.getElementById("txtButtonTkforeground");
                txtButtonTkforeground.value = rgbConvertHex(document.getElementById("xb" + id.slice(2)).style.color);

                var txtButtonTkheight = document.getElementById("txtButtonTkheight");
                txtButtonTkheight.value = parseInt(document.getElementById("b" + id.slice(2)).style.height);

                var txtButtonTktext = document.getElementById("txtButtonTktext");
                txtButtonTktext.value = document.getElementById("xb" + id.slice(2)).textContent;

                var txtButtonTkwidth = document.getElementById("txtButtonTkwidth");
                txtButtonTkwidth.value = parseInt(document.getElementById("b" + id.slice(2)).style.width); //Corregir elementos

            } else { //contraposicion que asegura que este de aqui es un clic al div del boton

                var txtidbutton = document.getElementById("txtButtonId");
                txtidbutton.value = parseid;
                var txtXButtonTK = document.getElementById("txtXButtonTK");
                txtXButtonTK.value = parseInt(document.getElementById("b" + parseid).style.left)
                var txtYbuttonTk = document.getElementById("txtYbuttonTk");
                txtYbuttonTk.value = parseInt(document.getElementById("b" + parseid).style.left);

                var txtanchorbuttonTk = document.getElementById("txtanchorbuttonTk"); //Falta agregar parametro al elemento
                var txtBGbuttonTK = document.getElementById("txtBGbuttonTK");
                //console.log("Color de fondo: " + rgbConvertHex(document.getElementById("b" + id.slice(2)).style.backgroundColor.toString()));
                txtBGbuttonTK.value = rgbConvertHex(document.getElementById("b" + parseid).style.backgroundColor.toString());
                var txtBorderWidthbuttonTK = document.getElementById("txtBorderWidthbuttonTK");
                txtBorderWidthbuttonTK.value = parseInt(document.getElementById("b" + parseid).style.borderWidth);
                var comboFontBtn = document.getElementById("comboFontBtn");
                var getStringfont = document.getElementById("xb" + parseid).style.fontFamily;
                console.log("fontFamily: " + document.getElementById("xb" + parseid).style.fontFamily);

                if (getStringfont == "Arial") {

                    comboFontBtn.value = "Arial";

                }

                if (getStringfont == "Helvetica") {

                    comboFontBtn.value = "Helvetica";

                }

                if (getStringfont == "Times New Roman") { //falla

                    comboFontBtn.value = "Times_New_Roman";

                }

                if (getStringfont == "Courier New") { //falla

                    comboFontBtn.value = "Courier_New";

                }

                if (getStringfont == "Verdana") {

                    comboFontBtn.value = "Verdana";

                }

                if (getStringfont == "Georgia") {

                    comboFontBtn.value = "Georgia";

                }

                if (getStringfont == "Comic Sans MS") { //falla

                    comboFontBtn.value = "Comic_Sans_MS";

                }

                var txtButtonTkforeground = document.getElementById("txtButtonTkforeground");
                txtButtonTkforeground.value = rgbConvertHex(document.getElementById("xb" + parseid).style.color);

                var txtButtonTkheight = document.getElementById("txtButtonTkheight");
                txtButtonTkheight.value = parseInt(document.getElementById("b" + parseid).style.height);

                var txtButtonTktext = document.getElementById("txtButtonTktext");
                txtButtonTktext.value = document.getElementById("xb" + parseid).textContent;

                var txtButtonTkwidth = document.getElementById("txtButtonTkwidth");
                txtButtonTkwidth.value = parseInt(document.getElementById("b" + parseid).style.width); //Corregir elementos


            }




        } else if (selectedType == "l" || selectedType.slice(1) == "l") {

            panelButtonProp.style.display = "none";
            labelPropPanel.style.display = "block";
            checkboxPropPanel.style.display = "none";
            textboxPropPanel.style.display = "none";

            if (id.charAt(1) == "l") { //Revisa si al que se le dio clic fue al hijo de un label

                var txtLabelId = document.getElementById("txtLabelId");
                txtLabelId.value = id.slice(2);


            } else { //Contraposicion, revisa si se le dio clic al div padre del label

                var txtLabelId = document.getElementById("txtLabelId");
                txtLabelId.value = parseid;

            }


            var txtLabelTKxz = document.getElementById("txtLabelTKxz");
            txtLabelTKxz.value = parseInt(document.getElementById("l" + txtLabelId.value).style.left);
            var txtLabelTKyz = document.getElementById("txtLabelTKyz");
            txtLabelTKyz.value = parseInt(document.getElementById("l" + txtLabelId.value).style.top);
            var txtLabelTKanchor = document.getElementById("txtLabelTKanchor"); //Aun no hace nada
            var txtLabelTKbg = document.getElementById("txtLabelTKbg");
            txtLabelTKbg.value = rgbConvertHex(document.getElementById("l" + txtLabelId.value).style.backgroundColor.toString());
            var txtLabelTKfont = document.getElementById("txtLabelTKfont");

            var getFont = document.getElementById("xl" + txtLabelId.value).style.fontFamily;

            if (getFont == "Arial") {

                txtLabelTKfont.value = "Arial";

            }

            if (getFont == "Helvetica") {

                txtLabelTKfont.value = "Helvetica";

            }

            if (getFont == "Times New Roman") { //falla

                txtLabelTKfont.value = "Times_New_Roman";

            }

            if (getFont == "Courier New") { //falla

                txtLabelTKfont.value = "Courier_New";

            }

            if (getFont == "Verdana") {

                txtLabelTKfont.value = "Verdana";

            }

            if (getFont == "Georgia") {

                txtLabelTKfont.value = "Georgia";

            }

            if (getFont == "Comic Sans MS") { //falla

                txtLabelTKfont.value = "Comic_Sans_MS";

            }

            var txtLabelTKfg = document.getElementById("txtLabelTKfg");
            txtLabelTKfg.value = rgbConvertHex(document.getElementById("xl" + txtLabelId.value).style.color);
            var txtLabelTKheight = document.getElementById("txtLabelTKheight");
            txtLabelTKheight.value = parseInt(document.getElementById("l" + txtLabelId.value).style.height);
            var txtLabelTKtext = document.getElementById("txtLabelTKtext");
            txtLabelTKtext.value = document.getElementById("xl" + txtLabelId.value).textContent;
            var txtLabelTKwidth = document.getElementById("txtLabelTKwidth");
            txtLabelTKwidth.value = parseInt(document.getElementById("l" + txtLabelId.value).style.width);



        } else if (selectedType == "x" || selectedType.slice(1) == "x") {

            panelButtonProp.style.display = "none";
            labelPropPanel.style.display = "none";
            checkboxPropPanel.style.display = "none";
            textboxPropPanel.style.display = "block";

            if (id.charAt(1) == "x") {

                var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");
                txtTextboxTKidTextbox.value = id.slice(2);


            } else {

                var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");
                txtTextboxTKidTextbox.value = parseid;

            }

            var txtTextboxTKX = document.getElementById("txtTextboxTKX");
            txtTextboxTKX.value = parseInt(document.getElementById("x" + txtTextboxTKidTextbox.value).style.left);
            var txtTextboxTKY = document.getElementById("txtTextboxTKY");
            txtTextboxTKY.value = parseInt(document.getElementById("x" + txtTextboxTKidTextbox.value).style.top);
            var txtTextboxTKText = document.getElementById("txtTextboxTKText");
            txtTextboxTKText.value = document.getElementById("px" + txtTextboxTKidTextbox.value).textContent;
            var txtTextboxTKWidth = document.getElementById("txtTextboxTKWidth");
            txtTextboxTKWidth.value = parseInt(document.getElementById("x" + txtTextboxTKidTextbox.value).style.width);
            var txtTextboxTKHeight = document.getElementById("txtTextboxTKHeight");
            txtTextboxTKHeight.value = parseInt(document.getElementById("x" + txtTextboxTKidTextbox.value).style.height);

            //Aqui faltan algunos elementos

        } else if (selectedType == "c" || selectedType.slice(1) == "c") {

            panelButtonProp.style.display = "none";
            labelPropPanel.style.display = "none";
            checkboxPropPanel.style.display = "block";
            textboxPropPanel.style.display = "none";

            if (id.charAt(1) == "c") {

                var txtCheckboxTKidCheckbox = document.getElementById("txtCheckboxTKidCheckbox");
                txtCheckboxTKidCheckbox.value = id.slice(2);


            } else {

                var txtCheckboxTKidCheckbox = document.getElementById("txtCheckboxTKidCheckbox");
                txtCheckboxTKidCheckbox.value = parseid;

            }

            var txtCheckboxTKx = document.getElementById("txtCheckboxTKx");
            txtCheckboxTKx.value = parseInt(document.getElementById("c" + txtCheckboxTKidCheckbox.value).style.left);
            var txtCheckboxTKy = document.getElementById("txtCheckboxTKy");
            txtCheckboxTKy.value = parseInt(document.getElementById("c" + txtCheckboxTKidCheckbox.value).style.top);
            var txtCheckboxTKChecked = document.getElementById("txtCheckboxTKChecked");
            if (document.getElementById("c" + txtCheckboxTKidCheckbox.value).className == "checkindicatorActive") {


            }//falta checkindicatorInactive
            var txtCheckboxTKText = document.getElementById("txtCheckboxTKText");
            txtCheckboxTKText.value = document.getElementById("tc" + txtCheckboxTKidCheckbox.value).textContent;
            //falta state



        }

    }
    
});

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbConvertHex(colorDivValue) {
    console.log("color que llega: " + colorDivValue)
    if (colorDivValue != "" && colorDivValue != null) {

        var colorValues = colorDivValue.match(/\d+/g);
        //var colorValues = colorDivValue.replace(/[() ]/g, "").split(",");
        console.log("color en conversion: " + colorValues)
        var red = parseInt(colorValues[0]);
        var green = parseInt(colorValues[1]);
        var blue = parseInt(colorValues[2]);

        /*return red + green + blue*/

        var r = componentToHex(red);
        var g = componentToHex(green);
        var b = componentToHex(blue);

        var finalcol = rgbToHex(r, g, b);

        return finalcol;
    }

    return "#cccccc";
   
}

function setBGColor() {

    var ChBGColor = document.getElementById("ChBGColor");
    var lienzobg = document.getElementById("lienzo");
    lienzobg.style.backgroundColor = ChBGColor.value;


}

function DeleteElement() {

    var lienzodivgen = document.getElementById("lienzo");

    var btnDeleteTk = document.getElementById("btnDeleteTk");
    btnDeleteTk.disabled = true;

    if (selectedType == "b" || selectedType.slice(1) == "b") {
        var txtButtonId = document.getElementById("txtButtonId");
        var elemento = document.getElementById("b" + txtButtonId.value);
        
        if (elemento != null) {
            console.log(elemento.id);
            lienzodivgen.removeChild(elemento);
        }
               
    } else if (selectedType == "l" || selectedType.slice(1) == "l") {
        var txtLabelId = document.getElementById("txtLabelId");
        var elemento = document.getElementById("l" + txtLabelId.value);
        
        if (elemento != null) {
            console.log(elemento.id);
            lienzodivgen.removeChild(elemento);
        }

    } else if (selectedType == "x" || selectedType.slice(1) == "x") {
        var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");
        var elemento = document.getElementById("x" + txtTextboxTKidTextbox.value);
        
        if (elemento != null) {
            console.log(elemento.id);
            lienzodivgen.removeChild(elemento);
        }

    } else if (selectedType == "c" || selectedType.slice(1) == "c" ) {
        var txtCheckboxTKidCheckbox = document.getElementById("txtCheckboxTKidCheckbox");
        var elemento = document.getElementById("c" + txtCheckboxTKidCheckbox.value);
        
        if (elemento != null) {
            console.log(elemento.id);
            lienzodivgen.removeChild(elemento);
        }

    }



}