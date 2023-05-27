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
    contenedorlienzo.style.height = parseInt(altura) + "px";
    contenedorpropiedades.style.height = parseInt(altura) + "px";
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


    if (selectedItem == 1) {


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
        botontk.style.width = "100px";
        botontk.classList.add("TKbuttonBase");        
        botontk.classList.add("FadeInAnim");        
        


        var pid = document.createElement("p");
        var ptipo = document.createElement("p");
        //b = boton 
        initialid += 1;
        botontk.id = "b" + initialid; //La primera letra en el padre significa el tipo de objeto que es


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

        ptipo.style.display = "none";

        botontk.style.position = "relative"; //absolute
        botontk.style.top = "-1px";
        botontk.style.left = "-1px";
        botontk.appendChild(pid);
        botontk.appendChild(ptipo);
        divlienzo.appendChild(botontk);



    } else if (selectedItem == 2) {

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
        //ptext.style.top = "-55px";

        labelTk.style.position = "relative"; //absolute
        divlienzo.appendChild(labelTk);
        
        labelTk.appendChild(pid);
        labelTk.appendChild(ptipo);
        labelTk.appendChild(ptext);





    } else if (selectedItem == 3) { //textbox


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
        var divlienzo = document.getElementById("lienzo");

        var txtTextboxTKidTextbox = document.getElementById("txtTextboxTKidTextbox");  //asignación del id al lienzo -------------------------------------
        txtTextboxTKidTextbox.value = initialid;


        textbox.id = "x" + initialid;
        textbox.classList.add("FadeInAnim");
        textbox.classList.add("TKtextboxBase");
        textbox.style.width = "150px";
        textbox.style.height = "25px";

        var ptext = document.createElement("p");
        ptext.id = "px" + initialid;


        textbox.appendChild(ptext);
        divlienzo.appendChild(textbox);




    } else if (selectedItem == 4) {


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
        var checkindicator = document.createElement("div");
        checkindicator.style.width = "20px";
        checkindicator.style.height = "20px";
        checkindicator.classList.add("checkindicatorInactive");
        checkindicator.classList.add("nav-item");
        checkindicator.id = "ds" + initialid;

        var textcheck = document.createElement("p");
        textcheck.textContent = "---"
        textcheck.classList.add("nav-item");
        textcheck.id = "tc" + initialid;



        newckeckbox.appendChild(checkindicator);
        newckeckbox.appendChild(textcheck);
        


        newckeckbox.style.width = "100px";
        divlienzo.appendChild(newckeckbox);



    } else {

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

    fetch('../Users/Projects/1.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.listacheckbox == null) {
                console.log("listacheckbox está vacío");
            } else {
                console.log("listacheckbox no está vacío");
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

}

var lienzodivpanel = document.getElementById("lienzo");

lienzodivpanel.addEventListener("click", function (event) {

    var target = event.target;
    if (target.id != "lienzo") {

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
            console.log(selectedType);

        } 

        if (id.charAt(1) == "l") { //revisa si es un hijo de label

            selectedType = id.charAt(1);
            console.log(selectedType);

        }



        console.log("ID del div: " + parseid);

        if (selectedType == "b" || selectedType.slice(1) == "b") { //Este solo se ejecuta cuando el item seleccionado es el boton o es hijo del boton

            panelButtonProp.style.display = "block";
            labelPropPanel.style.display = "none";
            checkboxPropPanel.style.display = "none";
            textboxPropPanel.style.display = "none";

            if (id.charAt(1) == "b") {

                var txtidbutton = document.getElementById("txtButtonId");
                txtidbutton.value = id.slice(2);


            } else {

                var txtidbutton = document.getElementById("txtButtonId");
                txtidbutton.value = parseid;

            }




        } else if (selectedType == "l" || selectedType.slice(1) == "l") {

            panelButtonProp.style.display = "none";
            labelPropPanel.style.display = "block";
            checkboxPropPanel.style.display = "none";
            textboxPropPanel.style.display = "none";

            if (id.charAt(1) == "l") {

                var txtLabelId = document.getElementById("txtLabelId");
                txtLabelId.value = id.slice(2);


            } else {

                var txtLabelId = document.getElementById("txtLabelId");
                txtLabelId.value = parseid;

            }

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




        }


    }
    
    



});



