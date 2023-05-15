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
