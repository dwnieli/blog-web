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
  "Tudo depende do tipo de lente que você utiliza para ver as coisas.",
  "Quando os pés estão corretos, todo o resto nos acompanha.",
  "Apenas porque uma coisa funciona, não quer dizer que ela não possa ser aprimorada.",
  "Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.",
  "É para ser difícil. Se não fosse difícil, todos fariam.",
  "Às vezes, o caminho certo não é o mais fácil.",
  "Conhecimento é a única virtude e ignorância é o único vício."
]

function gerarFrase() {
  const index = Math.floor(Math.random() * frases.length)
  alert(frases[index])
}


function mudarTema() {
  document.documentElement.classList.toggle("darkmode")


  const icone = document.querySelector(".material-symbols-outlined.mudarTema")

  if (document.documentElement.classList.contains("darkmode")) {
    icone.textContent = "light_mode"
  } else {
    icone.textContent = "dark_mode"
  }
}