window.addEventListener('load', function () {

    var altoPagina = this.document.scrollingElement.clientHeight;

    var ErrorMSGDIV = this.document.getElementById("ErrorMSGDIV");
    var intoErrorMSG = this.document.getElementById("intoErrorMSG");
    var imgOvni = this.document.getElementById("imgOvni");



    ErrorMSGDIV.style.height = altoPagina - 20 + "px";
    imgOvni.style.height = altoPagina - 20 + "px";
    intoErrorMSG.style.height = altoPagina - 20 + "px";



});


