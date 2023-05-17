var leo = window.document.getElementById("leo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    samantha.style ="display:none"
    leo.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    samantha.style ="display:flex"
    leo.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}