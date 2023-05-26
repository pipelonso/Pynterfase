function sesioncontrols() {

    var sesion = document.getElementById("userOptions");
    //var controles = document.getElementById("SesionControls");
    var botonLogin = document.getElementById("botonLogin");
    var botonRegistro = document.getElementById("botonRegistro");



    sesion.style.display = "none";
    //controles.style.display = "block";

    botonLogin.style.display = "block";
    botonRegistro.style.display = "block";

}


function showUserSesion() {

    var sesion = document.getElementById("userOptions");
    var controles = document.getElementById("SesionControls");

    sesion.style.display = "block";
    controles.style.display = "none";


}
