// Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás,
// sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito 
//somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no
// passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.


programa {
  funcao inicio() {
    inteiro minDeVoo = 5 , cadaMinGasta = 10, maximoNoBalao = 4, taxaPorPessoa = 20, gastosMetrosCub = 15, quantidadeCliente, minPasseio
    real totalTudo, consumoDeGas,custoDoGas,taxaCobrar

    escreva("Quantas pessoas vão no balao (limite de 4 pessoas): ") leia (quantidadeCliente)
    enquanto ( quantidadeCliente > maximoNoBalao ) {escreva ("Limite ultrapassado, quantidade maxima de pessoas é ",maximoNoBalao, "\nDigite novamente a quantia de pessoas: ") leia(quantidadeCliente)  }
    escreva ("Quantos minutos de passeio?: ") leia(minPasseio)


    consumoDeGas = ( minPasseio/ minDeVoo) * cadaMinGasta
    custoDoGas =  consumoDeGas * gastosMetrosCub

    taxaCobrar = quantidadeCliente * taxaPorPessoa

    totalTudo = taxaCobrar + custoDoGas

    escreva ("O valor total do passeio será de R$",totalTudo)
  }
}
