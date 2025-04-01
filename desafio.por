programa {
  funcao inicio() {
    
    real valorMaca = 1.50,valorLaranja = 2 , valorBergamota = 1 , valorBanana = 1.20 ,valorPera = 0.50 ,soma,somaMaca,somaLara,somaBerga,somaBana,somaPera
    inteiro quantiaMaca , quantiaLaranja, quantiaBergamota,quantiaBanana,quantiaPera
    
    escreva("Maça R$1,50.Quantas vão querer: ")
     leia(quantiaMaca)
    escreva("Laranja R$2,00.Quantas vão querer: ")
     leia(quantiaLaranja)
    escreva("Bergamota R$1,00.Quantas vão querer: " )
     leia(quantiaBergamota)
    escreva("Banana R$1,20.Quantas vão querer: ")
     leia(quantiaBanana)
    escreva("Pera R$0,50.Quantas vao querer: ")
     leia(quantiaPera)

      somaMaca = valorMaca *quantiaMaca 
      somaLara = valorLaranja * quantiaLaranja
      somaBerga = valorBergamota * quantiaBergamota
      somaBana = valorBanana *quantiaBanana 
      somaPera = valorPera * quantiaPera
    
      soma = somaMaca + somaLara + somaBerga + somaBana + somaPera

    escreva("\n=====================\n|Quantidades")
      se(quantiaMaca > 0 ) {
        escreva("\n|Maça: ",quantiaMaca," (R$",somaMaca,")" )
      }
      se(quantiaLaranja > 0){
        escreva("\n|Laranja: ",quantiaLaranja," (R$",somaLara,")")
      }
      se(quantiaBergamota>0){
        escreva("\n|Bergamota: ",quantiaBergamota," (R$",somaBerga,")")
      }
      se(quantiaBanana > 0){
        escreva("\n|Banana: ",quantiaBanana," (R$",somaBana,")")
      }
      se (quantiaPera>0) {
        escreva("\n|Pera: ",quantiaPera," (R$",somaPera,")")
      }
       escreva("\n=====================\n"
       
       )

    escreva("\n=================================\nvalor total da compra deu R$",soma ,
     "\n=================================\n")
  }
}
