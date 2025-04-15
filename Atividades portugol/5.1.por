// Crie um programa que execute a validação de uma senha digitada
//pelo usuário. Caso ele digite a senha “1234” devemos informar a ele
//“acesso permitido”. Para qualquer outra senha digitada, informar “acesso
//negado”.


programa {
  funcao inicio() {
 
    inteiro senhaUser, senhaPermitida = 1234

    escreva("Digite a senha de acesso: ") leia(senhaUser)

    se (senhaUser == senhaPermitida){
      escreva("Acesso permitido.")
    } senao {
    escreva("Acesso negado.")
    }
    
  }
}
