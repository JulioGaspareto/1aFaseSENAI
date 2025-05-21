function cadastro(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let resultado = document.getElementById("resultado")

    resultado.innerText = `${nome}, seja bem vindo ao nosso site.\nVoce tem ${idade} anos.`

}
function calcularMediaSimples(){
    let n1 = Number(document.getElementById("primeiraNota").value)
    let n2 = Number(document.getElementById("segundaNota").value)
    let n3 = Number(document.getElementById("terceiraNota").value)
    let n4 = Number(document.getElementById("quartaNota").value)
    let resultadoMediaSimples = document.getElementById("resultadoMediaSimples")

    media = (n1 + n2 + n3 + n4 ) / 4
    resultadoMediaSimples.innerText = "Resultado: " + media 
}
function mediaNotaPeso(){
    let n1 = Number(document.getElementById("primeiraNota1").value)
    let n2 = Number(document.getElementById("segundaNota2").value)
    let n3 = Number(document.getElementById("terceiraNota3").value)
    let n4 = Number(document.getElementById("quartaNota4").value)
    let p1 = Number(document.getElementById("pesoPrimeiraNota").value)
    let p2 = Number(document.getElementById("pesoSegundaNota").value)
    let p3 = Number(document.getElementById("pesoTerceiraNota").value)
    let p4 = Number(document.getElementById("pesoQuartaNota").value)
    let resultadoMediaPeso = document.getElementById("resultadoMediaPeso")

    calculo = (n1*p1)+(n2*p2)+(n3*p3)+(n4*p4)
    somaPeso = p1 + p2 + p3 + p4
    mediaGeral = calculo/somaPeso

    resultadoMediaPeso.innerText = "Resultado: "+ mediaGeral
}