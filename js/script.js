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


const frases = [
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "Inspiração vem dos outros. Motivação vem de dentro de nós.",
  "A jornada de mil milhas começa com o primeiro passo.",
  ""
]