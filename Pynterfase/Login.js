window.addEventListener("resize", function () {    
    var alturaventana = this.window.innerHeight;
    var anchoventana = this.window.innerWidth;
    
    var loginbox = this.document.getElementById("loginbox");

    loginbox.style.position = "relative";
    loginbox.style.top = (alturaventana / 6) + "px"

})

window.addEventListener("pageshow", function() {

    var alturaventana = this.window.innerHeight;
    var loginbox = this.document.getElementById("loginbox");

    loginbox.style.position = "relative";
    loginbox.style.top = (alturaventana / 6) + "px"

})
