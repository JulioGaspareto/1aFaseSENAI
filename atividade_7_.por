
//Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa.
// Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os 
//valores dos itens e mostre na tela valor que você deve receber (troco).

programa {
  funcao inicio() {
    
    real arroz, batata, suco, valorTotal, resultado
    inteiro grana = 100

    

    escreva ("digite o valor do arroz: ") leia(arroz )
    escreva("valor da sua batata palha: ") leia(batata)
    escreva("agora seu suco de garrafa: ") leia(suco)

    valorTotal = arroz + batata + suco 

    resultado =   grana - valorTotal
     escreva("se você tem R$100, seu troco será R$",resultado) 
    

  }
}
