function ocultarContCode() {

    document.getElementById("contCode").style.display = "none"
    document.getElementById("contpass").style.display = "none";

}

function mostrarContCode() {

    document.getElementById("contCode").style.display = "contents"
    document.getElementById("contSendMail").style.opacity = "25%";

}

function mostrarconPass() {

    document.getElementById("contpass").style.display = "contents";
    document.getElementById("contCode").style.opacity = "25%";

}

function ocultarcontPass() {

    document.getElementById("contpass").style.display = "none";

}