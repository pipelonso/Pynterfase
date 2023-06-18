var currentJson = "";
var projectID = 0;

function onResizeCambas() {

    var limiteslienzo = document.getElementById("limiteslienzo");
    var altura = document.scrollingElement.clientHeight;
    limiteslienzo.style.height = altura - 200 + "px";

    var txtpyGenerated = document.getElementById("txtpyGenerated");
    txtpyGenerated.style.height = altura - 200 + "px";


}

function loadstart() {

    if (currentJson != "" || currentJson != null) {

        var stringJson = JSON.stringify(currentJson);

        //var txtOutuputpy = document.getElementById("txtOutuputpy");
        //txtOutuputpy.value = stringJson;

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
        //var txtlienzoname = document.getElementById("txtlienzoname");
        //var ChBGColor = document.getElementById("ChBGColor");

        ongeneratelienzo.style.height = listalienzo[0].height + "px";
        ongeneratelienzo.style.width = listalienzo[0].width + "px";
        //textAnchoLienzo.value = listalienzo[0].width;
        //textAltoLienzo.value = listalienzo[0].height;
        ongeneratelienzo.style.backgroundColor = listalienzo[0].BackgroundColor;
        var ChBGColor = document.getElementById("ChBGColor");
        //ChBGColor.value = listalienzo[0].BackgroundColor;
        //txtlienzoname.value = listalienzo[0].title;

        var LX = listalienzo[0].x;
        var LY = listalienzo[0].y;

        //var LResizable = document.getElementById("Chkeditresizable");
        //LResizable.checked = listalienzo[0].Resizable;
        //var LMaximizable = document.getElementById("ChkeditMaximizable");
        //LMaximizable.checked = listalienzo[0].Maximizable;
        //var ChkeditMinimizable = document.getElementById("ChkeditMinimizable");
        //ChkeditMinimizable.checked = listalienzo[0].Minimizable;
        //var ChkeditFullScrean = document.getElementById("ChkeditFullScrean");
        //ChkeditFullScrean.checked = listalienzo[0].Fullscreen;
        //var ChkeditShowTaskbar = document.getElementById("ChkeditShowTaskbar");
        //ChkeditShowTaskbar.checked = listalienzo[0].ShowInTaskbar;
        //var ChkeditTransparent = document.getElementById("ChkeditTransparent");
        //ChkeditTransparent.checked = listalienzo[0].Transparency;
        //var ChkeditAlwaysInFront = document.getElementById("ChkeditAlwaysInFront");
        //ChkeditAlwaysInFront.checked = listalienzo[0].alwaysinfront;
        //var ChkeditShowCursor = document.getElementById("ChkeditShowCursor");
        //ChkeditShowCursor.checked = listalienzo[0].CursorVisible;
        //var ChkeditTakeFocus = document.getElementById("ChkeditTakeFocus");
        //ChkeditTakeFocus.checked = listalienzo[0].TakeFocus;
        //var ChkeditAutoMeasure = document.getElementById("ChkeditAutoMeasure");
        //ChkeditAutoMeasure.checked = listalienzo[0].AutoMeasures;

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


            //var txtidbutton = document.getElementById("txtButtonId"); //Aqui esta el valor que se remplaza en el panel de propiedades


            pid.textContent = listabotones[i].id.slice(1);
            pid.id = "ib" + listabotones[i].id.slice(1); //la segunda letra en un hijo significa el tipo que es su padre
            pid.style.display = "none";
            //txtidbutton.value = pid.textContent;

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

        if (listalienzo[0].Resizable == false) {
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
            generatedScript += "background = \"" + listabotones[i].background + "\",";
            generatedScript += "foreground = \"" + listabotones[i].foreground + "\",";
            if (listabotones[i].font != "" && listabotones[i].font != null) {
                generatedScript += "font = (\"" + listabotones[i].font + "\", 12),";
            }
            generatedScript += "height = " + parseInt((listabotones[i].height / 100)) + ",";
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
            if (listatextboxs[i].height != null && listatextboxs[i].height != "NaN" && listatextboxs[i].height != "" && listatextboxs[i].height != NaN) {
                generatedScript += "font = (\"Arial\"," + parseInt(listatextboxs[i].height / 2) + "),";
            }
            if (listatextboxs[i].width != null && listatextboxs[i].width != "NaN" && listatextboxs[i].width != "" && listatextboxs[i].width != NaN) {
                generatedScript += "width = " + parseInt((parseInt(listatextboxs[i].width) / parseInt((parseInt(listatextboxs[i].height) / 2)))) + " ,";
            }




            generatedScript += "text = (\"1.0\",\"" + listatextboxs[i].text + "\")";



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

    var txtpyGenerated = document.getElementById("txtpyGenerated");

    var pythonCode = txtpyGenerated.value;

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(pythonCode));
    element.setAttribute('download', projectID + '.py');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}

