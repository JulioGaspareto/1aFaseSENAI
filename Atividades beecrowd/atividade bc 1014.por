
// Calcula o consumo médio de um carro, sendo fornecida a distância total percorrida (em Km) e o total de combustível gasto (em litros).
// Entrada
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total (em Km) e o 
// segundo é um número de ponto flutuante Y representando o total de combustível gasto, com um dígito após o ponto decimal.
// Saída
// Apresenta um valor que representa o consumo médio de um carro com 3 dígitos após o ponto decimal, seguido pela mensagem "km/l".


programa {
  funcao inicio() {

      real combustivel, soma ,distanciaKm

      escreva("Digite a distancia percorrida(km): ")
       leia(distanciaKm)
      escreva("Digite a quantidade de combustivel gasto: ") 
       leia(combustivel)

       soma = distanciaKm / combustivel

       escreva(soma," Km/l")


    
  }
}
