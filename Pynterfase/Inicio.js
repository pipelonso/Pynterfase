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

var twoBox = document.getElementById("2Box");
//var twoBox = document.getElementsByClassName("boom");

twoBox.addEventListener("mousemove", function (evento) {

    var mousex = evento.clientX;
    
    var midSec = twoBox.clientWidth / 2;

    if (mousex < midSec) {

        var centerleft = (mousex - midSec) * -1;
        var sectmentper = (centerleft / midSec) * 100;        
        twoBox.style.transform = "rotate3d(-1,1,0,"+ ((sectmentper / 8)) +"deg)";

    } else {

        var sectmentper = ((mousex / 2) / midSec) * 100;
        twoBox.style.transform = "rotate3d(-1,-1,0," + ((sectmentper / 8)) + "deg)";

    }

} ) 


var OneBox = document.getElementById("1Box");
//var twoBox = document.getElementsByClassName("boom");

OneBox.addEventListener("mousemove", function (evento) {

    var mousex = evento.clientX;

    var midSec = OneBox.clientWidth / 2;

    if (mousex < midSec) {

        var centerleft = (mousex - midSec) * -1;
        var sectmentper = (centerleft / midSec) * 100;
        OneBox.style.transform = "rotate3d(-1,1,0," + ((sectmentper / 8)) + "deg)";

    } else {

        var sectmentper = ((mousex / 2) / midSec) * 100;
        OneBox.style.transform = "rotate3d(-1,-1,0," + ((sectmentper / 8)) + "deg)";

    }

}) 


var fourBox = document.getElementById("4Box");
//var twoBox = document.getElementsByClassName("boom");

fourBox.addEventListener("mousemove", function (evento) {

    var mousex = evento.clientX;

    var midSec = fourBox.clientWidth / 2;

    if (mousex < midSec) {

        var centerleft = (mousex - midSec) * -1;
        var sectmentper = (centerleft / midSec) * 100;
        fourBox.style.transform = "rotate3d(-1,1,0," + ((sectmentper / 8)) + "deg)";

    } else {

        var sectmentper = ((mousex / 2) / midSec) * 100;
        fourBox.style.transform = "rotate3d(-1,-1,0," + ((sectmentper / 8)) + "deg)";

    }

}) 

var threeBox = document.getElementById("3Box");
//var twoBox = document.getElementsByClassName("boom");

threeBox.addEventListener("mousemove", function (evento) {

    var mousex = evento.clientX;

    var midSec = threeBox.clientWidth / 2;

    if (mousex < midSec) {

        var centerleft = (mousex - midSec) * -1;
        var sectmentper = (centerleft / midSec) * 100;
        threeBox.style.transform = "rotate3d(-1,1,0," + ((sectmentper / 8)) + "deg)";

    } else {

        var sectmentper = ((mousex / 2) / midSec) * 100;
        threeBox.style.transform = "rotate3d(-1,-1,0," + ((sectmentper / 8)) + "deg)";

    }

}) 