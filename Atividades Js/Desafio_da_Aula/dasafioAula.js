let primeiroNumero = Number(prompt("Digite o primeiro numero para o calculo:"))
let segundoNumero = Number(prompt("Digite o segundo numero para o calculo: "))
let expreçao = prompt("Escreva a expreçao do seu calculo\nadiçao/subtraçao/multiplicaçao/divisao:")

if (expreçao == "adiçao"){
    totalSoma = primeiroNumero + segundoNumero
    console.log("Resultado do calculo: ",totalSoma)

} else if (expreçao == "subtraçao"){
    totalMenos = primeiroNumero - segundoNumero
    console.log("Resultado do calculo: ",totalMenos)

} else if(expreçao == "multiplicaçao"){
    totalMulti = primeiroNumero * segundoNumero
    console.log("Resultado do calculo: ",totalMulti)

}else if (expreçao == "divisao") {
    totalDivi = primeiroNumero / segundoNumero
    console.log("Resultado do calculo: ",totalDivi)
}