programa {
  funcao inicio() {
    inteiro leaofemia  = 9, leaoMacho = 5  , areaCasal = 400, areaIndividual =320 , totalAreaCasal,totalAreaIndividual, femia,macho, numeroCasal , totalArea

   escreva("Digite a quantidade de casais: ") leia(numeroCasal)
    enquanto(numeroCasal > leaoMacho) {escreva("Temos uma qauntidade de ", leaoMacho," leões machos.\nDigite uma quantidade igual ou menor: ") leia(numeroCasal)}

    totalAreaCasal = numeroCasal * areaCasal 

    femia = leaofemia - numeroCasal
    macho = leaoMacho - numeroCasal

    totalAreaIndividual = (femia + macho) * areaIndividual
    
    totalArea = totalAreaIndividual + totalAreaCasal

  escreva("O territorio total dos leões é de ",totalArea," km².")


  }
}
