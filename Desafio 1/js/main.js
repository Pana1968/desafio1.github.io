var input = document.querySelector(".texto-Entrada");
var output = document.querySelector("#desencriptar-texto");
var muneco = document.querySelector(".munieco")
var textoInfo = document.querySelector(".frame-5")

var diccionario = new Array(new Array("e","enter"), new Array("i","imes"), new Array("a","ai"), new Array("o","ober"),new Array("u","ufat"))

input.addEventListener("click", function () {
  input.select()
});

var btnEncriptar = document.querySelector("#btn-encriptar");
btnEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  validar();
});

var btnDesencriptar= document.querySelector("#btn-desencriptar");
btnDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  return output.value = desencriptarTexto(output.value);
});

var btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click", function (event) {
  event.preventDefault();

  copiarTexto();
});


