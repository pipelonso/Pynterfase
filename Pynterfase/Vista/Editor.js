var selectedItem = 0;
var selectdID = 0;
var initialid = 0;
var selectedType = "";
var projectID = 0;
var currentJson = "";

function ValidateStart() {

    var txtAncho = document.getElementById("txtAncho");
    var txtAlto = document.getElementById("txtAlto");
    var txtTitle = document.getElementById("txtTitle");

    var txtAnchoH = document.getElementById("txtAnchoH");
    var txtAltoH = document.getElementById("txtAltoH");
    var txtlienzoname = document.getElementById("txtlienzoname");

    if (txtAlto.value != null || txtAlto.value != "") {

        if (txtAncho.value != null || txtAncho.value != "") {

            if (txtTitle.value != null || txtTitle.value != "") {

                txtAltoH.value = txtAlto.value;
                txtAnchoH.value = txtAncho.value;
                txtlienzoname.value = txtTitle.value;

                var canvasDimPanel = document.getElementById("canvasDimPanel").style.display = "none";

                ResizeCanvas(txtAnchoH.value, txtAltoH.value);
                //setCanvasHeight();
                startEditor();
                onSaveChanges();
                location.reload();


            }

        }

    }


}



function loadstart() {

    if (currentJson != "" || currentJson != null ) {

        var stringJson = JSON.stringify(currentJson);

        var isparsedJson = JSON.parse(stringJson);

        //console.log(isparsedJson[0]);
        var listalienzo = isparsedJson[0];
        var listabotones = isparsedJson[1];
        var listalabel = isparsedJson[2];
        var listatextbox = isparsedJson[3];
        var listacheckbox = isparsedJson[4];

        //cargar primero propiedades del lienzo
        var ongeneratelienzo = document.getElementById("lienzo");
        var textAnchoLienzo = document.getElementById("txtAnchoH");
        var textAltoLienzo = document.getElementById("txtAltoH");
        var txtlienzoname = document.getElementById("txtlienzoname");
        var ChBGColor = document.getElementById("ChBGColor");

        ongeneratelienzo.style.height = listalienzo[0].height + "px";
        ongeneratelienzo.style.width = listalienzo[0].width + "px";
        textAnchoLienzo.value = listalienzo[0].width;
        textAltoLienzo.value = listalienzo[0].height;
        ongeneratelienzo.style.backgroundColor = listalienzo[0].BackgroundColor;
        var ChBGColor = document.getElementById("ChBGColor");
        ChBGColor.value = listalienzo[0].BackgroundColor;
        txtlienzoname.value = listalienzo[0].title;

        var LX = listalienzo[0].x; 
        var LY = listalienzo[0].y; 

        var LResizable = document.getElementById("Chkeditresizable");
        LResizable.checked = listalienzo[0].Resizable;
        var LMaximizable = document.getElementById("ChkeditMaximizable");
        LMaximizable.checked = listalienzo[0].Maximizable;
        var ChkeditMinimizable = document.getElementById("ChkeditMinimizable");
        ChkeditMinimizable.checked = listalienzo[0].Minimizable;
        var ChkeditFullScrean = document.getElementById("ChkeditFullScrean");
        ChkeditFullScrean.checked = listalienzo[0].Fullscreen;
        var ChkeditShowTaskbar = document.getElementById("ChkeditShowTaskbar");
        ChkeditShowTaskbar.checked = listalienzo[0].ShowInTaskbar;
        var ChkeditTransparent = document.getElementById("ChkeditTransparent");
        ChkeditTransparent.checked = listalienzo[0].Transparency;
        var ChkeditAlwaysInFront = document.getElementById("ChkeditAlwaysInFront");
        ChkeditAlwaysInFront.checked = listalienzo[0].alwaysinfront;
        var ChkeditShowCursor = document.getElementById("ChkeditShowCursor");
        ChkeditShowCursor.checked = listalienzo[0].CursorVisible;
        var ChkeditTakeFocus = document.getElementById("ChkeditTakeFocus");
        ChkeditTakeFocus.checked = listalienzo[0].TakeFocus;
        var ChkeditAutoMeasure = document.getElementById("ChkeditAutoMeasure");
        ChkeditAutoMeasure.checked = listalienzo[0].AutoMeasures;

        var divlienzo = document.getElementById("lienzo");

        var idsCollector = [];


        //Aqui comienza el algoritmo para los botones
        

        for (var i = 0; i < listabotones.length; i++) {

            botontk = document.createElement("div");
            

            idsCollector.push(listabotones[i].id.slice(1));
            
            
            botontk.style.padding = "0px";
            botontk.style.margin = "0px";
            botontk.style.marginBottom = "0px";
            botontk.classList.add("TKbuttonBase");
            botontk.classList.add("FadeInAnim");

            

            var pid = document.createElement("p");
            var ptipo = document.createElement("p");
            //b = boton 
            
            botontk.id = listabotones[i].id; //La primera letra en el padre significa el tipo de objeto que es

            
            var txtidbutton = document.getElementById("txtButtonId"); //Aqui esta el valor que se remplaza en el panel de propiedades


            pid.textContent = listabotones[i].id.slice(1);
            pid.id = "ib" + listabotones[i].id.slice(1); //la segunda letra en un hijo significa el tipo que es su padre
            pid.style.display = "none";
            txtidbutton.value = pid.textContent;

            pid.style.fontSize = "8px";
            ptipo.textContent = "button";
            ptipo.id = "tb" + listabotones[i].id.slice(1); //la segunda letra en un hijo significa el tipo que es su padre
            ptipo.style.fontSize = "7px";
            ptipo.style.position = "relative";
            ptipo.style.top = "-32px";
            ptipo.classList.add("text-center");

            var btnText = document.createElement("p");
            btnText.id = "xb" + listabotones[i].id.slice(1);
            btnText.textContent = listabotones[i].text;
            btnText.style.textAlign = "center";
            btnText.style.color = listabotones[i].foreground;
            btnText.style.fontFamily = listabotones[i].font;

            ptipo.style.display = "none";

            botontk.style.position = "absolute"; //absolute

            

            botontk.style.height = listabotones[i].height + "px";
            if (listabotones[i].width != null && listabotones[i].width != "" && listabotones[i].width != 0) {
                botontk.style.width = listabotones[i].width + "px";
            }

            botontk.style.left = listabotones[i].x + "px";
            botontk.style.top = listabotones[i].y + "px";

            botontk.style.backgroundColor = listabotones[i].background;
            botontk.appendChild(pid);
            //botontk.setAttribute("runat" , "server");
            botontk.appendChild(btnText);
            botontk.appendChild(ptipo);
            divlienzo.appendChild(botontk);




        }
        
        //Aqui comienza el algoritmo para el label

        for (var i = 0; i < listalabel.length; i++) {


            var labelTk = document.createElement("div");
            idsCollector.push(listalabel[i].id.slice(1));

            labelTk.style.height = listalabel[i].height + "px";
            if (listalabel[i].width != null || listalabel[i].width != "" || listalabel[i].width != 0) {
                labelTk.style.width = listalabel[i].width + "px";
            }            
            labelTk.classList.add("FadeInAnim");
            labelTk.id = listalabel[i].id;


            console.log(listalabel[i].background);


            var ptipo = document.createElement("p");
            var pid = document.createElement("p");
            var ptext = document.createElement("p");

            labelTk.classList.add("TkLabelBase");

            ptipo.textContent = "label";
            ptipo.style.fontSize = "7px";
            ptipo.id = "tl" + listalabel[i].id.slice(1);
            ptipo.style.position = "relative";
            ptipo.style.top = "-32px";
            ptipo.classList.add("text-center");
            ptipo.style.display = "none";

            pid.textContent = listalabel[i].id.slice(1);
            pid.id = "il" + listalabel[i].id.slice(1);
            pid.style.fontSize = "8px";
            pid.style.display = "none";


            var txtidLabel = document.getElementById("txtLabelId");  //asignación del id al lienzo -------------------------------------
            txtidLabel.value = pid.textContent;

            ptext.textContent = listalabel[i].text;
            ptext.style.color = listalabel[i].foreground;
            ptext.style.position = "relative";
            ptext.id = "xl" + listalabel[i].id.slice(1);
            ptext.style.color = listalabel[i].foreground;
            ptext.style.fontFamily = listalabel[i].font;
            
            //ptext.style.top = "-55px";

            labelTk.style.position = "absolute"; //absolute
            labelTk.style.left = listalabel[i].x + "px";
            labelTk.style.top = listalabel[i].y + "px";
            labelTk.style.backgroundColor = listalabel[i].background;
            divlienzo.appendChild(labelTk);

            labelTk.appendChild(pid);
            labelTk.appendChild(ptipo);
            labelTk.appendChild(ptext);

        }

        //Aqui comienza el algoritmo del textbox

        for (var i = 0; i < listatextbox.length; i++) {

            var textbox = document.createElement("div");
            textbox.style.left = listatextbox[i].x + "px";
            textbox.style.top = listatextbox[i].y + "px";

            idsCollector.push(listatextbox[i].id.slice(1));

            var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");  //asignación del id al lienzo -------------------------------------
            txtTextboxTKidTextbox.value = listatextbox[i].id.slice(1);


            textbox.id = "x" + listatextbox[i].id.slice(1);
            textbox.classList.add("FadeInAnim");
            textbox.classList.add("TKtextboxBase");
            textbox.style.width = listatextbox[i].width + "px";
            textbox.style.height = listatextbox[i].height + "px";
            textbox.style.position = "absolute";
            var ptext = document.createElement("p");
            ptext.id = "px" + listatextbox[i].id.slice(1);
            ptext.textContent = listatextbox[i].text;

            textbox.appendChild(ptext);
            divlienzo.appendChild(textbox);

        }

        //Aqui comienza el algoritmo del checkbox

        for (var i = 0; i < listacheckbox.length; i++) {

            var newckeckbox = document.createElement("div");
            idsCollector.push(listacheckbox[i].id.slice(1));

            newckeckbox.id = "c" + listacheckbox[i].id.slice(1);

            var txtCheckboxTKidCheckbox = document.getElementById("txtCheckboxTKidCheckbox");  //asignación del id al lienzo -------------------------------------
            txtCheckboxTKidCheckbox.value = listacheckbox[i].id.slice(1);

            newckeckbox.classList.add("navbar")
            newckeckbox.classList.add("chekers");
            newckeckbox.style.padding = "0px";
            newckeckbox.style.margin = "0px";
            newckeckbox.style.position = "absolute";
            var checkindicator = document.createElement("div");
            if (listacheckbox[i].width != null && listacheckbox[i].width != "" || listacheckbox[i].width != 0) {
                checkindicator.style.width = listacheckbox[i].width + "px";
            }            
            checkindicator.style.height = "15px";
            checkindicator.style.width = "15px";
            if (listacheckbox[i].checked == true) {
                checkindicator.classList.add("checkindicatorActive");
            } else {
                checkindicator.classList.add("checkindicatorInactive");
            }            
            checkindicator.classList.add("nav-item");
            checkindicator.id = "sc" + listacheckbox[i].id.slice(1);
            checkindicator.style.padding = "0px";


            var textcheck = document.createElement("p");
            textcheck.textContent = listacheckbox[i].text;
            textcheck.classList.add("nav-item");
            textcheck.id = "tc" + listacheckbox[i].id.slice(1);
            textcheck.style.fontSize = "15px";
            newckeckbox.classList.add("FadeInAnim");
            newckeckbox.style.left = listacheckbox[i].x + "px";
            newckeckbox.style.top = listacheckbox[i].y + "px";
            newckeckbox.appendChild(checkindicator);
            newckeckbox.appendChild(textcheck);



            //newckeckbox.style.width = "200px";
            divlienzo.appendChild(newckeckbox);




        }

        //obtension de ultima id
        
        initialid = Math.max(...idsCollector);
        if (initialid == -Infinity || initialid == Infinity) {
            initialid = 0;
        }
        console.log(idsCollector);
        console.log(initialid);
    }

}



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
    contenedorlienzo.style.height = ((parseInt(altura) / 3) * 2) + "px";
    contenedorpropiedades.style.height = ((parseInt(altura) / 3) * 2) + "px";
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
        //botontk.setAttribute("runat" , "server");
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
            if (document.getElementById("sc" + txtCheckboxTKidCheckbox.value).classList.contains("checkindicatorActive")) {

                txtCheckboxTKChecked.value = "true";

            } else {
                txtCheckboxTKChecked.value = "false";
            }
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

function onSaveChanges() {

    var listapantalla = [];
    var listaButtons = [];
    var listaLabels = [];
    var listaTextbox = [];
    var listaCheckbox = [];
    var listaElementos = [];

    listaElementos.splice(0, listaElementos.length);
    listapantalla.splice(0, listapantalla.length);
    listaButtons.splice(0, listaButtons.length);
    listaLabels.splice(0, listaLabels.length);
    listaTextbox.splice(0, listaTextbox.length);
    listaCheckbox.splice(0, listaCheckbox.length);
    

    for (var i = 1; i < initialid + 1; i++) {



        var elementoBoton = document.getElementById("b" + i);
        var elementoLabel = document.getElementById("l" + i);
        var elementoTextbox = document.getElementById("x" + i);
        var elementoCheckbox = document.getElementById("c" + i);

        if (elementoBoton != null) {

            console.log("encontrado y analizando: " + "b" + i);

            var xleft = parseInt(document.getElementById("b" + i).style.left);
            var ytop = parseInt(document.getElementById("b" + i).style.top);
            var btnanchor = null;
            var Bg = rgbConvertHex(document.getElementById("b" + i).style.backgroundColor);
            var btnbitmap = null;
            var btnborderwidth = parseInt(document.getElementById("b" + i).style.borderWidth);
            var btncompound = null;
            var btncursor = null;
            var fontbtn = document.getElementById("xb" + i).style.fontFamily;
            var btnForeground = rgbConvertHex(document.getElementById("xb" + i).style.color);
            var btnheight = parseInt(document.getElementById("b" + i).style.height);
            var btnState = null;
            var btntext = document.getElementById("xb" + i).textContent;
            var btnWidth = parseInt(document.getElementById("b" + i).style.width);

            var data = {

                id: "b" + i,
                x: xleft,
                y: ytop,
                anchor: btnanchor,
                background: Bg,
                bitmap: btnbitmap,
                borderwidth: btnborderwidth,
                compound: btncompound,
                cursor: btncursor,
                font: fontbtn,
                foreground: btnForeground,
                height: btnheight,
                state: btnState,
                text: btntext,
                width: btnWidth

            }

            console.log("Atributos: | id: " + data.id + " | x: " + data.x + " | y: " + data.y + " | anchor: " + data.anchor + " | background: " + data.background + " | bitmap: " + data.bitmap + " | borderwidth: " + data.borderwidth + " | compound: " + data.compound + " | cursor: " + data.cursor + " | font: " + data.font + " | foreground: " + data.foreground + " | height: " + data.height + " | state: " + data.state + " | text: " + data.text + " | width: " + data.width);

            listaButtons.push(data);


        } else if (elementoLabel != null) {

            console.log("encontrado y analizando: " + "l" + i);

            var lblx = parseInt(document.getElementById("l" + i).style.left);
            var lbly = parseInt(document.getElementById("l" + i).style.top);
            var lblAnchor = parseInt(document.getElementById("xl" + i).style.textAnchor)
            var lblBG = rgbConvertHex(document.getElementById("l" + i).style.backgroundColor);
            var lblCursor = null;
            var lblFont;
            if (document.getElementById("xl" + i).style.fontFamily != null) {

                lblFont = document.getElementById("xl" + i).style.fontFamily;

            } else {

                blFont = null;

            }            
            var lblFg = rgbConvertHex(document.getElementById("xl" + i).style.color);
            var lblheight = parseInt(document.getElementById("l" + i).style.height);
            var lbltext = document.getElementById("xl" + i).textContent; //Revision l2Label
            var lblwidth = parseInt(document.getElementById("l" + i).style.width);

            var data = {

                id: "l" + i,
                x: lblx,
                y: lbly,
                anchor: lblAnchor,
                background: lblBG,
                cursor: lblCursor,
                font: lblFont,
                foreground: lblFg,
                height: lblheight,
                text: lbltext,
                width: lblwidth

            }

            listaLabels.push(data);

            console.log("Atributos: | id: " + data.id + " | x: " + data.x + " | y: " + data.y + " | anchor: " + data.anchor + " | background: " + data.background + " | cursor: " + data.cursor + " | font: " + data.font + " | foreground: " + data.foreground + " | height: " + data.height + " | text: " + data.text + " | width: " + data.width);

        } else if (elementoTextbox != null) {

            console.log("encontrado y analizando: " + "x" + i);

            var txtx = parseInt(document.getElementById("x" + i).style.left);
            var txty = parseInt(document.getElementById("x" + i).style.top);
            var txttext = document.getElementById("px" + i).textContent;
            var txtwidth = parseInt(document.getElementById("x" + i).style.width);
            var txtheight = parseInt(document.getElementById("x" + i).style.height);
            var txtmaxlength = null;
            var txtmultiline = null;
            var txtreadonly = null;
            var txtscrollbars = null;

            var data = {

                id: "x" + i,
                x: txtx,
                y: txty,
                text: txttext,
                width: txtwidth,
                height: txtheight,
                maxlenght: txtmaxlength,
                multiline: txtmultiline,
                readonly: txtreadonly,
                scrollbars: txtscrollbars

            }

            console.log("Atributos: | id: " + data.id + " | x: " + data.x + " | y: " + data.y + " | text: " + data.text + " | width: " + data.width + " | height: " + data.height + " | maxlength: " + data.maxlength + " | multiline: " + data.multiline + " | readonly: " + data.readonly + " | scrollbars: " + data.scrollbars);

            listaTextbox.push(data);

        } else if (elementoCheckbox != null) {

            console.log("encontrado y analizando: " + "c" + i);

            var chx = parseInt(document.getElementById("c" + i).style.left);
            var chy = parseInt(document.getElementById("c" + i).style.top);
            var chCheked = null;
            if (document.getElementById("sc" + i).classList.contains("checkindicatorActive")) {

                chCheked = true;

            } else {

                chCheked = false;

            }

            var chText = document.getElementById("tc" + i).textContent;
            var chstate = null;

            var data = {

                id: "c" + i,
                x: chx,
                y: chy,
                checked: chCheked,
                text: chText,
                state: chstate
            }

            console.log("Atributos: | id: " + data.id + " | x: " + data.x + " | y: " + data.y + " | checked: " + data.checked + " | text: " + data.text + " | state: " + data.state);
            listaCheckbox.push(data);

        } else {

            console.log("No existe ningun elemento con ese id ni tipo, puede que halla sido eliminado por el usuario -- Codigos generados : b" + i + " -- l" + i + "--x" + i + "--c" + i);

        }

                
    }//Fin for

    var lienzo = document.getElementById("lienzo");
    var altolienzo = parseInt(lienzo.style.height);
    var ancholienzo = parseInt(lienzo.style.width);

    var idLienzo = "1";
    var Lgeometry = ancholienzo + "x" + altolienzo;  //Tamaño inicial  de la ventana
    var LTitle = document.getElementById("txtlienzoname").value; // Obtiene o establece el título de la ventana.
    var LWidth = ancholienzo; // Obtiene o establece el ancho de la ventana.
    var LHeight = altolienzo; // Obtiene o establece la altura de la ventana.
    var LX = "0px"; // Obtiene o establece la posición horizontal de la ventana en la pantalla.
    var LY = "0px";  // Obtiene o establece la posición vertical de la ventana en la pantalla.

    var LResizable; // Obtiene o establece si la ventana se puede redimensionar.
    if (document.getElementById("Chkeditresizable").checked) {
        LResizable = true;
    } else {
        LResizable = false;
    }
    var LMaximizable; // Obtiene o establece si la ventana se puede maximizar.
    if (document.getElementById("ChkeditMaximizable").checked) {
        LMaximizable = true;
    } else {
        LMaximizable = false;
    }
    var LMinimizable; // Obtiene o establece si la ventana se puede minimizar.
    if (document.getElementById("ChkeditMinimizable").checked) {
        LMinimizable = true;
    } else {
        LMinimizable = false;
    }
    var LFullscreen; // Obtiene o establece si la ventana se muestra en modo de pantalla completa.
    if (document.getElementById("ChkeditFullScrean").checked) {
        LFullscreen = true;
    } else {
        LFullscreen = false;
    }
    var LShowInTaskbar; // Obtiene o establece si la ventana se muestra en la barra de tareas.
    if (document.getElementById("ChkeditShowTaskbar").checked) {
        LShowInTaskbar = true;
    } else {
        LShowInTaskbar = false;
    }
    var LTransparency; // Obtiene o establece si la ventana tiene transparencia.
    if (document.getElementById("ChkeditTransparent").checked) {
        LTransparency = true;
    } else {
        LTransparency = false;
    }
    var LBackgroundColor = rgbConvertHex(lienzo.style.backgroundColor); // Obtiene o establece el color de fondo de la ventana.
    var LAlwaysOnTop; // Obtiene o establece si la ventana siempre se muestra en la parte superior de otras ventanas.
    if (document.getElementById("ChkeditAlwaysInFront").checked) {
        LAlwaysOnTop = true;
    } else {
        LAlwaysOnTop = false;
    }
    var LCursorVisible; // Obtiene o establece si el cursor es visible en la ventana.
    if (document.getElementById("ChkeditShowCursor").checked) {
        LCursorVisible = true;
    } else {
        LCursorVisible = false;
    }
    var LTakeFocus; // Obtiene o establece si la ventana toma el enfoque cuando se muestra.
    if (document.getElementById("ChkeditTakeFocus").checked) {
        LTakeFocus = true;
    } else {
        LTakeFocus = false;
    }
    var LAutoMeasures; // Obtiene o establece si se ajustan automáticamente las dimensiones de la ventana en función de su contenido.
    if (document.getElementById("ChkeditAutoMeasure").checked) {
        LAutoMeasures = true;
    } else {
        LAutoMeasures = false;
    }


    var datapantalla = {

        id: idLienzo,
        geometry: Lgeometry,
        title: LTitle,
        width: LWidth,
        height: LHeight,
        x: LX,
        y: LY,
        Resizable: LResizable,
        Maximizable: LMaximizable,
        Minimizable: LMinimizable,
        Fullscreen: LFullscreen,
        ShowInTaskbar: LShowInTaskbar,
        Transparency: LTransparency,
        alwaysinfront: LAlwaysOnTop,
        BackgroundColor: LBackgroundColor,
        CursorVisible: LCursorVisible,
        TakeFocus: LTakeFocus,
        AutoMeasures: LAutoMeasures

    }

    listapantalla.push(datapantalla);

    listaElementos.push(listapantalla);
    listaElementos.push(listaButtons);
    listaElementos.push(listaLabels);
    listaElementos.push(listaTextbox);
    listaElementos.push(listaCheckbox);

    var jsonData = JSON.stringify(listaElementos);
    console.log("Json Generado");
    console.log("---------------------------------------");
    console.log(jsonData);
    console.log("---------------------------------------");

    var nombreArchivo = projectID + ".json";

    var formData = new FormData();
    formData.append('archivo', new Blob([jsonData], { type: 'application/json' }),  nombreArchivo);
    formData.append("fileName" , nombreArchivo)

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'WriteJson.aspx', true);

    //confguraciòn de encabezado de peticiòn
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.send(formData);

    location.reload();

}

function GeneratePython() {

    if (currentJson != null || currentJson != "") {



        var stringJson = JSON.stringify(currentJson);



        var isparsedJson = JSON.parse(stringJson);
        var listalienzo = isparsedJson[0];
        

        var txtpyGenerated = document.getElementById("txtpyGenerated");

        var generatedScript = "";

        generatedScript = "import tkinter as tk \nventana = tk.Tk() \n";

        generatedScript += "ventana.title(\"" + listalienzo[0].title + "\")\n";

        generatedScript += "ventana.geometry(\"" + listalienzo[0].geometry + "\")\n" 

        generatedScript += "ventana.configure(bg=\"" + listalienzo[0].BackgroundColor + "\")\n"

        if (listalienzo[0].Resizable == false)
        {
            generatedScript += "ventana.resizable(False, False)\n"
        }
        if (listalienzo[0].Fullscreen == false) {
            generatedScript += "ventana.attributes(\"-fullscreen\", False)\n"
        } else {
            generatedScript += "ventana.attributes(\"-fullscreen\", True)\n"
        }
        if (listalienzo[0].Maximizable == true) {
            generatedScript += "ventana.state('zoomed') \n"
        } else {
            //generatedScript += "ventana.state('zoomed')\n"
        }
        if (listalienzo[0].Minimizable == true) {
            //generatedScript += "ventana.attributes('+minimized', True)\n"
        }
        if (listalienzo[0].Transparency == true) {
            generatedScript += "ventana.attributes(\"-alpha\", 0.5) #Puedes editar la transparencia de la ventana aqui \n";
        }
        if (listalienzo[0].alwaysinfront == true) {
            generatedScript += "ventana.attributes(\"-topmost\", True)\n";
        }
        if (listalienzo[0].CursorVisible == false) {
            generatedScript += "ventana.config(cursor=\"none\")\n"
        } 
        if (listalienzo[0].TakeFocus == true) {
            generatedScript += "ventana.grab_set()\n"
        }
        if (listalienzo[0].AutoMeasures == true) {
            //generatedScript += "def adjust_window_size():\n";
            //generatedScript += "    Wwidth = root.winfo_reqwidth()\n";
            //generatedScript += "    Wheight = root.winfo_reqheight()\n";
            //generatedScript += "    ventana.geometry(\"'\" + Wwidth + \"x\" + Wheight + \"'\")\n";
            //generatedScript += "adjust_window_size()\n";

        }

        //Algoritmo para generar el script del boton

        var listabotones = isparsedJson[1];

        for (var i = 0; i < listabotones.length; i++) {

            generatedScript += listabotones[i].id + "= tk.Button(ventana,";
            generatedScript += "text=\"" + listabotones[i].text + "\",";
            generatedScript += "background = \"" + listabotones[i].background + "\","  ;
            generatedScript += "foreground = \"" + listabotones[i].foreground + "\",";
            if (listabotones[i].font != "" && listabotones[i].font != null) {
                generatedScript += "font = (\"" + listabotones[i].font + "\", 12),";
            }
            generatedScript += "height = " + parseInt((listabotones[i].height / 100))  + ",";
            if (listabotones[i].width != "" && listabotones[i].width != null && listabotones[i].width != 0) {
                generatedScript += "width = " + parseInt((listabotones[i].width / 9)) + ",";
            }
            generatedScript += "cursor = \"hand2\"";
            generatedScript += ")\n"

            generatedScript += listabotones[i].id + ".place(x=" + listabotones[i].x + ", y =" + listabotones[i].y + ")\n";

            


        }

        //Algoritmo para labels

        var listalabels = isparsedJson[2];

        for (var i = 0; i < listalabels.length; i++) {

            generatedScript += listalabels[i].id + "= tk.Label(ventana,";
            if (listalabels[i].background != "#cccccc") {
                generatedScript += "background = \"" + listalabels[i].background + "\",";
            }            
            generatedScript += "foreground = \"" + listalabels[i].foreground + "\",";
            if (listalabels[i].font != null && listalabels[i].font != "" && listalabels[i].font != "\"Times New Roman\"" && listalabels[i].font != "\"Comic Sans MS\"" && listalabels[i].font != "\"Courier New\"") {
                generatedScript += "font = \"" + listalabels[i].font + "\"12,";
            }            
            if (listalabels[i].height != null && listalabels[i].height != NaN && listalabels[i].height != "") {
                generatedScript += "height = " + parseInt(listalabels[i].height / 100) + ",";
            }
            if (listalabels[i].width != null && listalabels[i].width != NaN && listalabels[i].width != "") {
                generatedScript += "width = " + parseInt(listalabels[i].width / 9) + ",";
            }
            generatedScript += "text = \"" + listalabels[i].text + "\"";
            generatedScript += ")\n";


            generatedScript += listalabels[i].id + ".place(x=" + listalabels[i].x + ", y =" + listalabels[i].y + ")\n";
        }

        //Algoritmo para textbox
        var listatextboxs = isparsedJson[3];

        for (var i = 0; i < listatextboxs.length; i++) {

            generatedScript += listatextboxs[i].id + "= tk.Entry(ventana,";
            if (listatextboxs[i].height != null && listatextboxs[i].height != "NaN" && listatextboxs[i].height != "" && listatextboxs[i].height != NaN ) {
                generatedScript += "font = (\"Arial\"," + parseInt(listatextboxs[i].height / 2) + ")," ;
            }
            if (listatextboxs[i].width != null && listatextboxs[i].width != "NaN" && listatextboxs[i].width != "" && listatextboxs[i].width != NaN) {
                generatedScript += "width = " + parseInt( (parseInt(listatextboxs[i].width) / parseInt((parseInt(listatextboxs[i].height) / 2 ))) ) + " ,";
            }




            generatedScript += "text = (\"1.0\",\"" + listatextboxs[i].text + "\")" ;



            generatedScript += ")\n";

            generatedScript += listatextboxs[i].id + ".place(x=" + listatextboxs[i].x + ", y =" + listatextboxs[i].y + ")\n";

        }

        //Algoritmo para checkbox

        var listacheckbox = isparsedJson[4];

        for (var i = 0; i < listacheckbox.length; i++) {


            generatedScript += listacheckbox[i].id + " = tk.Checkbutton(ventana,";
            if (listacheckbox[i].checked == true) {
                generatedScript += "variable=tk.BooleanVar(value=True),";
            }
            generatedScript += "text =\"" + listacheckbox[i].text + "\"";
            
            generatedScript += ")\n";

            generatedScript += listacheckbox[i].id + ".place(x=" + listacheckbox[i].x + ", y =" + listacheckbox[i].y + ")\n";


        }


        generatedScript += "ventana.mainloop()";

        txtpyGenerated.value = generatedScript;


    } 




}

function DownLoad() {


    ruta = document.getElementById("txtpyGenerated").value;
    var link = document.getElementById("DownloadLink");
    link.setAttribute("download", ruta);
    link.click();



}