//Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro).
// Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros),
// mostrando o resultado ao final.


programa {
  funcao inicio() {

    inteiro combustivel, distancia, consumo 

      escreva("distancia total percorrida (km): ") leia (distancia)
      escreva("total de combustivel gasto (litros): ") leia(combustivel)
    consumo = distancia / combustivel 
     escreva("O consumo de conbustível é de ",consumo,"km por litro.")    
  }
}
