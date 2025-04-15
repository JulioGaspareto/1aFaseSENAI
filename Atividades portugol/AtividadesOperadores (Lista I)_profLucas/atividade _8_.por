//Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), 
//além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado 
//a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.


programa {
  funcao inicio() {


 inteiro alunos, bombom = 2, professor = 1, valorDaCompra

 escreva("quantos alunos à na turma?: ") leia(alunos)

 valorDaCompra = alunos * bombom + professor

 escreva("Você terá que comprar ", valorDaCompra," bombons, lembrando que temos que da ",professor, " bombom para o professor(a)")

    
  }
}
