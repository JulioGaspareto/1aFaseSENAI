// Mano Juca bateu a cabeça e está com problemas de
//raciocínio...
//Está analisando dois números há horas e não consegue
//descobrir qual deles é o maior. Vamos ajuda-lo!
//Crie um algoritmo que leia dois números A e B e imprima o
//maior deles.


programa {
  funcao inicio() {
  
    inteiro numero1,numero2 

    escreva("Digite o primeiro numero: ")
     leia(numero1)
    escreva("Digite o segundo numero: ")
     leia (numero2)

    se (numero1 > numero2 ) {
      escreva("O maior numero é: ",numero1)
    }
    se(numero1 < numero2 ) {
      escreva("O maior numero é: ",numero2)
    }
  }
}
