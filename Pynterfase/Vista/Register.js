window.addEventListener("resize", function () {

    var alturaventana = this.window.innerHeight;
    var regbox = this.document.getElementById("regbox");

    regbox.style.top = alturaventana /  15 + "px"


})
window.addEventListener("pageshow", function () {

    var alturaventana = this.window.innerHeight;
    var regbox = this.document.getElementById("regbox");

    regbox.style.top = alturaventana / 15 + "px"

})