////window.addEventListener("load", function () {

////    var AdminDiv = this.document.getElementById("AdminDiv");
////    var liAdmin = this.document.getElementById("liAdmin");


////    AdminDiv.style.display = "none";
////    liAdmin.classList.remove("nav-item")


////});

function thisThinksStarts() {

    var AdminDiv = this.document.getElementById("AdminDiv");
    var liAdmin = this.document.getElementById("liAdmin");


    AdminDiv.style.display = "none";
    liAdmin.classList.remove("nav-item")

}


function IsAdmin() {

    var AdminDiv = document.getElementById("AdminDiv").style.display = "block";
    var liAdmin = document.getElementById("liAdmin");

    console.log("aaaa");

    
    liAdmin.classList.add("nav-item");
    

}