 //As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos.
 // A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. Programar um sistema que calcule 
 //o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.


programa {
  funcao inicio() {
    
    inteiro expectDeVida = 200 , intervaloReprod = 4 , filhotesPorReprodu = 1 , numeroDaReprod , totalFilhotes
    real reprodPorDec , mediaFilhoPorDec , 
    
    numeroDaReprod = expectDeVida / intervaloReprod
    totalFilhotes = numeroDaReprod * filhotesPorReprodu 

    
  reprodPorDec = 10 / intervaloReprod 
  mediaFilhoPorDec = reprodPorDec * filhotesPorReprodu 

  escreva("Total de filhotes ao longo da vida: ",totalFilhotes) 
  escreva("\nMedia de filhotes por década: ",mediaFilhoPorDec)

  }
}
