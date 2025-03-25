//Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

programa {
  funcao inicio() {
    
    real salarioUm, resultado, valorDaPorcentagem, liquido

    escreva("ola, qual seria seu salario atual?: ")
    leia(salarioUm)

     resultado = salarioUm * 20 

      valorDaPorcentagem = resultado / 100

      liquido= salarioUm - valorDaPorcentagem

    escreva("seu salario Liquido é:", liquido)

  }
}
