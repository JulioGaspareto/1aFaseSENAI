programa {
  funcao inicio() {
    
    inteiro nascimentoUser, anoAtual, idadeUser, mesesR, diasR, semanasR
    inteiro meses = 12, dias = 365 , semanas = 52

    escreva("Digite o ano em que vc nasceu:")leia (nascimentoUser)
    escreva("Digite o ano atual: ") leia(anoAtual)

    idadeUser =   anoAtual-nascimentoUser

    mesesR = meses * idadeUser
    
    diasR = dias * idadeUser

    semanasR = semanas * idadeUser

    escreva("com estes dados, vc tem ", idadeUser," anos\nviveu ",mesesR," meses, ",semanasR," semanas e ",diasR," dias.")

    


  }
}
