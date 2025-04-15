programa {
  funcao inicio() {
    
    inteiro p1,p2,unidade1,unidade2
    real valorP1,valorP2,calculoP1,calculoP2,total

    escreva("Codigo do primeiro produto: ")
     leia(p1)
    escreva("Quantos unidades do primeiro produto: ")
     leia(unidade1)
    escreva("Qual o valor do primeiro produto: R$")
     leia(valorP1)
   escreva("Codigo do segundo produto: ")
     leia(p2)
     enquanto(p2 == p1) {
      escreva("Esse codigo de produto ja foi usado!\nDigite o codigo do segundo produto: ")
      leia(p2)
     }
    escreva("Quantos unidades do segundo produto: ")
     leia(unidade2)
    escreva("Qual o valor do segundo produto: R$")
     leia(valorP2)  

   calculoP1 = valorP1 * unidade1
   
   calculoP2 = valorP2 * unidade2

   total = calculoP1 + calculoP2

   escreva("\n=== Codigos ===\n|",p1," (R$",valorP1,")\n|",p2," (R$",valorP2,")\n|Valor Toral: R$",total)



  }
}
