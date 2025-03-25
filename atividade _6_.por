//Faça um programa onde o usuário deve digitar a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.

programa {
  funcao inicio() {
      
      real celsius, fahrenheit, resultadoUm, resultadoDois
    
    escreva("quantos graus Celsius esta: ")
    leia(celsius)

    resultadoUm = celsius * 9 
    resultadoDois = resultadoUm / 5 
    fahrenheit = resultadoDois + 32 

    escreva("Calculando ", celsius, "°C em Fahrenheit fica ", fahrenheit, "°F")


  }
}
