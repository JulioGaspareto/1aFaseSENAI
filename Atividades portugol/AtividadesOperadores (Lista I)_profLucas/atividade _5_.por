//Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

programa {
  funcao inicio() {
    
    real horarioUser, minutos , segundos

    escreva("que horas são?: ")
    leia(horarioUser)

    minutos = horarioUser * 60 
    segundos = minutos * 60

    escreva ("horas: ", horarioUser, "\nminutos: ", minutos, "\nsegundos: ", segundos)



  }
}
