window.addEventListener('scroll', detectarScroll);
var titleBack = document.getElementById("titleBack");
var oneBox = document.getElementById("1Box");
var twoBox = document.getElementById("2Box");
var threeBox = document.getElementById("3Box");
var fourBox = document.getElementById("4Box");


function detectarScroll() {
    
    const alturaPagina = document.documentElement.scrollHeight;

    
    const posicionScroll = window.scrollY || window.pageYOffset;

    console.log(alturaPagina + " --- " + posicionScroll);

    if (posicionScroll >= 312) {

        titleBack.classList.add("cajasHide");
        titleBack.classList.remove("cajasanim");

    } else {

        titleBack.classList.remove("cajasHide");
        titleBack.classList.add("cajasanim");

    }

    //if (posicionScroll >= 208) {

    //    oneBox.classList.remove("cajasHide");
    //    oneBox.classList.add("cajasanim");

    //} else {

        
    //    oneBox.classList.remove("cajasanim");
    //    oneBox.classList.add("cajasHide");

    //}

    //if (posicionScroll >= 300) {

    //    twoBox.classList.remove("cajasHide");
    //    twoBox.classList.add("cajasanim");
    //}
    //else
    //{
    //    twoBox.classList.remove("cajasanim");
    //    twoBox.classList.add("cajasHide");
    //}

    
}
