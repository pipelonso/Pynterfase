function startAll() {

    var UserSector = document.getElementById("UserSector");
    var ProjSelection = document.getElementById("ProjSection");

    UserSector.style.display = "none";
    ProjSelection.style.display = "none";




}


window.addEventListener("pageshow", function () {

    var altura = this.window.innerHeight;

    var boxUsers = this.document.getElementById("boxUsers");
    boxUsers.style.height = ((altura / 3) * 2) + "px"

    var boxprojs = this.document.getElementById("boxprojs");
    boxprojs.style.height = ((altura / 3) * 2) + "px"

})


function ShowUsers(){

    var UserSector = document.getElementById("UserSector");
    var ProjSelection = document.getElementById("ProjSection");

    UserSector.style.display = "block";
    ProjSelection.style.display = "none";




}


function ShowProjects(){

    var UserSector = document.getElementById("UserSector");
    var ProjSelection = document.getElementById("ProjSection");

    UserSector.style.display = "none";
    ProjSelection.style.display = "block";

}