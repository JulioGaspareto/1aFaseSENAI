programa {
  funcao inicio() {

    real pesoUM = 2 ,pesoDois = 3 , pesoTres = 5 , somaPeso = (pesoUM + pesoDois + pesoTres) , mediaFinal, notaUm,notaDois,notaTres

    escreva("Digite valor da primeira nota: ") leia(notaUm)
    escreva("Digite valor da segunda nota: ") leia(notaDois)
    escreva("Digite valor da terceira nota: ") leia(notaTres)

    mediaFinal = (notaUm * pesoUM + notaDois* pesoDois + notaTres* pesoTres) / somaPeso

    escreva("Valor da sua media é: ", mediaFinal)
    
  }
}
