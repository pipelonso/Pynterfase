this.addEventListener("load", function () {


    var altura = this.window.innerHeight;
    var SelectPanel = this.document.getElementById("SelectPanel");
    SelectPanel.style.height = ((altura / 3) * 2) + "px"
    var messageViewer = this.document.getElementById("messageViewer");
    messageViewer.style.height = ((altura / 3) * 2) + "px"

})