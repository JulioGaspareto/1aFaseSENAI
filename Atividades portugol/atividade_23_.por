programa {
  funcao inicio() {

    real primeiraNota , segundaNota, terceiraNota, mediaFinal, valorDaMedia

    escreva("Qual a media da sua escola: ") leia(valorDaMedia)
    escreva("Digite sua primeira nota: ") leia(primeiraNota)
    escreva("Digite sua segunda nota: ") leia(segundaNota)
    escreva("Digite sua terceira nota: ") leia(terceiraNota)

     mediaFinal = (primeiraNota + segundaNota + terceiraNota) / 3 

      se (valorDaMedia > mediaFinal) {escreva("infelizmente vc nao alcançou a media nescessaria.\nSua media final é ",mediaFinal)} senao {escreva("Meus Parabens, vc alcançou a media fianal.\nSua media finar é: ",mediaFinal)}
  }
}