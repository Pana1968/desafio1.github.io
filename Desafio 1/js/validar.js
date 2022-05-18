
function validar() {
  var expReg = /[^\s*a-z]/g
  var result = expReg.test(input.value)

  if (!result) {
    output.classList.remove("active")
    muneco.classList.add("active")
    textoInfo.classList.add("active")
    return output.value = encriptarTexto(input.value)
  } else {
    monstrarAlertaError()
  }
}

function monstrarAlertaError() {
  output.classList.add("active")
  muneco.classList.remove("active")
  textoInfo.classList.remove("active")
};
