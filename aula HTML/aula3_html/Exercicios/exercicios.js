function Exercicio1(){
let nomeUser = prompt("Digite seu nome:")

alert(` Olá ${nomeUser}, Seja bem vindo!`)

}

function Exercicio2(){
let primeiroNumero = Number(prompt("Digite o primerio numero para soma:"))
let segundoNumero = Number (prompt("Digite o segundo numero:"))

alert(`A soma desses numero é: ${primeiroNumero + segundoNumero}`)

}

function Exercicio3(){
    let temperaturaUser = Number(prompt("Digite a temperatura em °C "))
    alert(`A temperatura convertida fica ${(temperaturaUser * 9 / 5)+32 }`)
}

function Exercicio4(){

    let numeroUser = Number(prompt("Digite um numero para saber se é par ou impar:"))
    pOi = numeroUser%2 
    if (pOi == 0){
        alert(`o numero ${numeroUser} é par`)
    } else {
        alert(`O numero ${numeroUser} é impar`)
    }
}

function Exercicio5(){
    alert("Vamos calcular a sua média")
    let primeiraNota = Number(prompt("Digite sua primeira nota:"))
    let segundaNota = Number (prompt("Digite sua segunda nota:"))
    let terceiraNota = Number (prompt("Digite sua terceira nota:"))

    mediaNota = (primeiraNota + segundaNota + terceiraNota)/3

    if (mediaNota >= 7 ) {
        alert(`Parabens, você passou com ${mediaNota}`)
    
    } else {
        alert(`Infelizmente voce nao passou, sua media é ${mediaNota}`)
    }
}

function Exercicio6(){
    alert("Vamos calcular seu IMC")
    let alturaUser = Number(prompt("Digite sua altura:"))
    let pesoUser = Number (prompt("Digite seu peso:"))

    imc = pesoUser / (alturaUser * alturaUser)

    if(imc < 18.5){
        alert(`IMC: ${imc} |Abaixo do peso|`)
    } else if (imc > 18.5 && imc < 24.9){
        alert(`IMC: ${imc} |Peso normal|`)
    }else if (imc > 25 && imc < 29.9){
        alert(`IMC: ${imc} |Sobrepeso|`)
    } else {
        alert(`IMC: ${imc} |Obesidade|`)
    }
}

function Exercicio8(){
    let anoUser = Number(prompt("Digite um ano para ver se é bissexto"))
    let anobi, anoBi2, anoBi3
    
     anobi = anoUser%4
     anoBi2 = anoUser%100 
     anoBi3 = anoUser%400
   
    if (anobi == 0 && anoBi2 == 0 && anoBi3 == 0){
        alert ("Esse ano é bissexto")
    }else {
        alert("Esse ano nao é bissexto")
    }
}
