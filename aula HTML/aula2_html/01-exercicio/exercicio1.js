function soma(){
 let userNumber = Number(prompt("Digite um numero para adição:"))
 let userNumber2 = Number(prompt("Digite outro numero para adição:"))

   total = userNumber + userNumber2

   alert("A soma dos numero: " +total)
}

function subtrair(){

  let n1 = Number(prompt("Digite o primeiro numero para subtração:"))
  let n2 = Number(prompt("Digite o segundo numero para subtração"))

  total = n1 - n2

  alert(`A subtração é: ${total}`)
}

function multiplicaçao(){
  let n1 = Number(prompt("Digite o primero numero para multiplicação:"))
  let n2 = Number(prompt("Digite o segundo numero para multiplicação:"))

  total = n1 * n2
  alert("Total da multiplicação: "+total)
  
}

function divisao(){

 

let n1 = Number(prompt("Digite o numero para divisão:"))
  let n2 = Number(prompt("Por quantos ele vai ser dividido?"))

  total = n1/n2
  alert("Total da divisão: "+ total)

}