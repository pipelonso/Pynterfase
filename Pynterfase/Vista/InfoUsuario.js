function onhideall() {

    document.getElementById("imgAvatarBox").style.display = "none";
    document.getElementById("nameboxspace").style.display = "none";
    document.getElementById("passwordboxspace").style.display = "none";

}

function onshowname() {

    onhideall();

    document.getElementById("passwordboxspace").style.display = "none";
    document.getElementById("nameboxspace").style.display = "block";

    var imgboxheight = document.getElementById("userbox").clientHeight;
    document.getElementById("nameboxspace").style.height = imgboxheight.toString() + "px";


    document.getElementById("imgAvatarBox").style.display = "none";
    

}

function onshowimg() {

    onhideall();

    document.getElementById("passwordboxspace").style.display = "none";
    document.getElementById("nameboxspace").style.display = "none";
    
    document.getElementById("imgAvatarBox").style.display = "block";
    var imgboxheight = document.getElementById("imgAvatarBox").clientHeight;

    document.getElementById("userbox").style.height = imgboxheight.toString() + "px";

}

function onshowpass() {

    onhideall();

    document.getElementById("passwordboxspace").style.display = "block";
    var imgboxheight = document.getElementById("passwordboxspace").clientHeight;
    document.getElementById("userbox").style.height = imgboxheight.toString() + "px";
    document.getElementById("nameboxspace").style.display = "none";
    document.getElementById("imgAvatarBox").style.display = "none";

}