programa {
  funcao inicio() {

    inteiro numeroFuncionario,numeroHoras
    real valorHora,totalBruto

    escreva("Seu ID de funcionario: ") leia(numeroFuncionario)
    escreva("Carga horaria mensal: ")leia (numeroHoras)
    escreva("Quanto recebe por hora: R$") leia (valorHora)

    totalBruto = numeroHoras * valorHora 

    escreva("Funcionario ID: ",numeroFuncionario,"\nSalario mensal: R$",totalBruto)
    
  }
}
