// Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) 
//desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha 
//havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

programa {
  funcao inicio() {
    
    inteiro pessoasConvidados = 45, desperdicio, sobrou, choppLitros = 300, totalConsumido, mediaPorPessoa 

    escreva("quanto que sobrou?: ") leia(sobrou)
    escreva("quando foi desperdiçado?: ") leia(desperdicio)

    totalConsumido = choppLitros - desperdicio - sobrou 
    mediaPorPessoa = totalConsumido / pessoasConvidados 

    escreva("A média bebida por convidados na festa foi ", mediaPorPessoa, " litros por pessoa.")


  }
}
