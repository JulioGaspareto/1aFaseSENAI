//Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação.
// Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre 
//a média de horas por semana naquele mês.


programa {
  funcao inicio() {

      real horasPorSemana1,horasPorSemana2,horasPorSemana3,horasPorSemana4, horasFimDoMes, horarioUser

      escreva("digite o horario da primeira semana: ")leia ( horasPorSemana1)
      escreva ("segunda semana: ") leia(horasPorSemana2)
      escreva("terceira semana: ") leia(horasPorSemana3)
      escreva("quarta semana: ")leia(horasPorSemana4)

      horarioUser = horasPorSemana1 + horasPorSemana2 + horasPorSemana3 + horasPorSemana4 

      horasFimDoMes = horarioUser / 4 

      escreva("sua media de horas por semana fica: ",horasFimDoMes," horas.")

    
  }
}
