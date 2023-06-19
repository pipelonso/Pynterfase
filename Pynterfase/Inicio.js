window.addEventListener('scroll', detectarScroll);
var titleBack = document.getElementById("titleBack");
var oneBox = document.getElementById("1Box");
var twoBox = document.getElementById("2Box");
var threeBox = document.getElementById("3Box");
var fourBox = document.getElementById("4Box");


function detectarScroll() {
    
    const alturaPagina = document.documentElement.scrollHeight;

    
    const posicionScroll = window.scrollY || window.pageYOffset;

    //console.log(alturaPagina + " --- " + posicionScroll);

    if (posicionScroll <= 200) {

        titleBack.style.opacity = "100%";
    
    }

    if (posicionScroll <= 210) {

        titleBack.style.opacity = "80%";

    }
    if (posicionScroll >= 220) {

        titleBack.style.opacity = "60%";

    }
    if (posicionScroll >= 230) {

        titleBack.style.opacity = "50%";

    }
    if (posicionScroll >= 250) {

        titleBack.style.opacity = "25%";

    }
    if (posicionScroll >= 312) {

        titleBack.style.opacity = "0%";

    }

    
}
