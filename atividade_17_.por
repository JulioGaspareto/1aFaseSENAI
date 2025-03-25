//Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita 
//saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado
// é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja 
//digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

programa {
  funcao inicio() {

    inteiro clientes, banheiro = 50, bar = 150, escalaBanho , escalaBar

    escreva ("Quantidade de pessoas no festival: ") leia(clientes)

   escalaBanho = clientes / banheiro 
   escalaBar = clientes / bar 

   escreva("Com ",clientes," pessoas para o festivel, será nescessario\nBanheiros: ", escalaBanho ,"\nBares: ",escalaBar)

  }
}
