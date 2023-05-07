function onhideall() {

    document.getElementById("imgAvatarBox").style.display = "none";
    document.getElementById("nameboxspace").style.display = "none";
    document.getElementById("passwordboxspace").style.display = "none";

}

function onshowname() {

    //onhideall();

    document.getElementById("passwordboxspace").style.display = "none";
    document.getElementById("nameboxspace").style.display = "contents";
    
    document.getElementById("imgAvatarBox").style.display = "none";
    //nameSpace navbar col-lg-5 col-md-12 col-sm-12 nav-item my-2

}

function onshowimg() {

    onhideall();

    document.getElementById("passwordboxspace").style.display = "none";
    document.getElementById("nameboxspace").style.display = "none";
    document.getElementById("imgAvatarBox").style.display = "contents";

}

function onshowpass() {

    onhideall();

    document.getElementById("passwordboxspace").style.display = "contents";
    document.getElementById("nameboxspace").style.display = "none";
    document.getElementById("imgAvatarBox").style.display = "none";

}