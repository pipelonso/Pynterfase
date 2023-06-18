function SetClipboard(textURL) {

    var input = document.createElement("input");
    input.value = textURL;
    var lechuga = input.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("La url ha sido copiada al portapapeles");

}