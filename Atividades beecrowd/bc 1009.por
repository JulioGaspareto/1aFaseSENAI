programa {
  funcao inicio() {

    cadeia nomeUser
    real salarioUser,vendasUser, soma1 ,soma2, bonusVendas = 15
    
    escreva("Digite o nome do funcionario: ")
     leia(nomeUser)
    escreva("Salario fixo do funcionario: R$")
     leia(salarioUser)
    escreva("Total de vendas neste mês: R$")
     leia(vendasUser)

      soma1 = (bonusVendas * vendasUser) / 100
      soma2 = soma1 + salarioUser

      escreva("\n== Dados ==\n|Nome: ",nomeUser,"\n|Salario fixo: R$",salarioUser)
      se(vendasUser > 0){
        escreva("\n|Total das vendas: R$",vendasUser)
      }senao{
        escreva("\n|Total das vendas: NAO TEVE VENDAS")
      }
      
      escreva("\n|Salario final: R$",soma2)
  }
}
