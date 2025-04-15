//Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00
// e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar
// na fábrica e mostrar o total que receberá em reais.

programa {
  funcao inicio() {
    
    real vPlastico = 0.20
    real vPapel = 0.10
    real vMetal = 0.10
    real pUM, pDois, pTres, valorPlastico, valorPapel, valorMetal, total
  
    escreva ("quantos kg de plastico: ") leia(pUM)
    escreva("quantos kg de papel: ") leia(pDois)
    escreva("quantos kg de metal: ") leia(pTres)

    valorPlastico = vPlastico * pUM
    valorPapel = vPapel * pDois
    valorMetal = vMetal * pTres

      total = valorPlastico + valorPapel + valorMetal 

    escreva ("seu ganho total sera R$",total)

  }
}
