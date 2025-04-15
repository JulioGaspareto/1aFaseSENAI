//Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. 
//Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão 
//no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas 
//do grupo vão querer café diário. Mostrar na tela o total a pagar.

programa {
  funcao inicio() {
    inteiro diaria = 280 , totalDiaria, cafe = 15 , totalCafe, diaCliente, cafediario ,totalTudo, quantiaCliente

    escreva("Quantidade de pessoas: ") leia(quantiaCliente)
    escreva ("Quantos dias vão ficar: ") leia(diaCliente)
    escreva("Quantas pessoas vao querer café diario: ") leia(cafediario)


    totalDiaria = diaria * diaCliente
    totalCafe = cafe * diaCliente * cafediario
    totalTudo = totalDiaria + totalCafe 

      escreva ("O total vai ficar R$",totalTudo)


  }
}
