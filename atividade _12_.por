//Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
// Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e 
//total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o 
//percentual que cada um representa em relação ao total de eleitores. 

programa {
  funcao inicio() {

    inteiro totalEleitores, votosx, votosY, votosBrancos, votosNulos
    real percentualX, percentualY, percentualBrancos, percentualNulos , tUm, tDois, tTres, tQuatro
    

     escreva("Digite o total de Eleitores: ") leia(totalEleitores)


     escreva("Digite o total de votos do Primeiro Candidato: ") leia(votosx)

        enquanto(votosx > totalEleitores) { escreva("Esse valor não corresponde ao total de eleitores. Digite um número menor ou igual a '",totalEleitores, "'\n Digite novamente: ") leia(votosx)}
      
     escreva("Digite o total de votos do Segundo Candidato: ") leia(votosY)
        enquanto(votosY > totalEleitores - votosx ) {escreva("Valor inválido. Digite um número menor ou igual a ", totalEleitores - votosx, "\n Digite novamente: ") leia(votosY)}

     escreva("Digite o total de votos Em Branco: ") leia(votosBrancos)
        enquanto(votosBrancos > totalEleitores - votosx - votosY ) {escreva("Valor inválido. Digite um número menor ou igual a ", totalEleitores - votosx - votosY , "\n Digite novamente: " ) leia (votosBrancos)}

     votosNulos = totalEleitores - votosx - votosY - votosBrancos 
     escreva("calculando o restante os Votos Nulos são ", votosNulos )

      

        percentualX = (votosx / totalEleitores) *100


        percentualY = (votosY / totalEleitores) * 100


        percentualBrancos = (votosBrancos/ totalEleitores ) * 100


       percentualNulos = (votosNulos / totalEleitores ) * 100


      escreva("\nO porcentual cada canditato ficou\n")
      escreva("Primeiro Candidato: ", percentualX, "%\nSegundo Candidato: ", percentualY, "%\nEm branco: ", percentualBrancos, "%\nNulos: " , percentualNulos, "%")
    
  }
}
