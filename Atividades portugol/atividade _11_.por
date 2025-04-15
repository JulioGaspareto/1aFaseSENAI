//Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura,
// realizar o cálculo e mostrar o resultado na tela.

programa {
  funcao inicio() {

    real altura, peso, x1 

    escreva("qual sua altura?: ") leia (altura)
    escreva ("qual o seu peso?: ") leia(peso)    

    x1 = peso / altura * altura 

    escreva("seu IMC é (",x1, ") aproximadamente")
  }
}
