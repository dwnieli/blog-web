function aumentarFonte() {
  document.documentElement.classList.remove("textoNormal")
  document.documentElement.classList.add("aumentarTexto")
}

function fonteNormal() {
  document.documentElement.classList.remove("aumentarTexto", "diminuirTexto")
  document.documentElement.classList.add("textoNormal")
}

function diminuirFonte() {
  document.documentElement.classList.remove("textoNormal")
  document.documentElement.classList.add("diminuirTexto")
}