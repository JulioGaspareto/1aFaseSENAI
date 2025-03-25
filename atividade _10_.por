// Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto.
// Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.


programa {
  funcao inicio() {

     real valorUm, valorDois, valortres, contaUm, contaDois, resultadoFinal, somaValores

     escreva("Digite o valor do seu primeiro livro: ") leia(valorUm) 
     escreva("Digite o valor do seu segundo livro: ") leia(valorDois)
     escreva("Digite o valor do seu terceiro livro: ") leia(valortres)

      somaValores = valorUm + valorDois + valortres 

     contaUm = 15 / 100
     contaDois = contaUm * somaValores
      resultadoFinal = somaValores - contaDois

     escreva("Seu valor tota é R$", somaValores, "com o desconto de 15% fica R$", resultadoFinal)
    
  }
}
