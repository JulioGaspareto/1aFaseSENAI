 //Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. 
 //O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento.
 // Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na
 // tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo
 // que uma caixa de azulejo com 60 unidades custa R$45,50.



programa {
  funcao inicio() {
    
     real azulejo = 120 , caixa = 60 , valorCaixa = 45.50 , valorTotal
     inteiro metrosLargura, metrosComprimento, areaQuadrada, numeroCaixa, totalAzuleijo


      escreva("Comprimento em metros: ") leia( metrosComprimento)
      escreva("largura em metros: ") leia(metrosLargura)

      areaQuadrada = metrosComprimento * metrosLargura

      totalAzuleijo = azulejo * areaQuadrada
      
      numeroCaixa = totalAzuleijo / caixa 

      valorTotal = numeroCaixa * valorCaixa 
    
    escreva("Considerando os ", areaQuadrada, " m², você terá que comprar:\nQuantidade de Azulejo: ", totalAzuleijo , "\nQuantidade de Caixas: ", numeroCaixa, "\nValor total a ser pago: R$",valorTotal )
      
  }
}
