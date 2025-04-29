 let contador = 0

function Exercicio3(){

    let nomeUser = prompt("Digite o seu nome e receba seu poder aleatorio")
          
    // aleatorio = Math.random()
    // poder = aleatorio * 100
    
    // Math.floor() arredonda para baixo 
    // Math.ceil()  arredonda para cima
    // Math.round()  arredonda para o mais proximo 
    poder = Math.ceil(Math.random()*(10 - 0)+0)
    
    if (poder == 1 ){ 

        alert(`Capitao ${nomeUser}, Lorde dos mares.`)
        
    } else if (poder == 2 ){
        alert(`Rei ${nomeUser}, O pilar das chamas`)
    }else if (poder == 3){
        alert(`Mineiro ${nomeUser}, Domidador da Terra`)

    }else if (poder== 4){
        alert(`Coveiro ${nomeUser},O necromante`)
    } else if (poder == 5 ){
        alert(`Lorde ${nomeUser}, O imortal`)
    } else if (poder == 6) { 
        alert (`Cavaleiro ${nomeUser}, Portador da luz`)
    } else if (poder == 7) {
        alert (`Ladino ${nomeUser}, Velocista do reino`)
    }else if (poder == 8) { 
        alert (`mago ${nomeUser}, Conhecedor de todas magias`)
        
    } else if (poder == 9 ){
        alert(`monge ${nomeUser}, Conhecedor do futuro`)

    } else if (poder == 10){
        alert(`viking ${nomeUser}, Força de mil homens`)
    }
}
function Exercicio4(){
    
    let signoUser = prompt("Digite o seu signo:")

    signoUser = signoUser.toLowerCase() 

    // Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes

    aleatorio = Math.round(Math.random()*(3-1)+1)
    if(aleatorio == 3 ){
        alert(`Hoje seu signo de ${signoUser},está propicio a morte`)
    }else if (aleatorio == 2){
        alert(`o signo de ${signoUser} ira encontrar seu amor verdadeiro`)

    }else {
        alert (`o signo de ${signoUser} está com sorte hoje`)
    }

}

function Exercicio10(){

    let numberUser = Number(prompt("Digite um numero de 0 à 10 "))

    let ParOuImpar = Number(prompt("1 - Impar \n 2 - Par \n Digite o valor Para saber se é par ou impar"))

    sistemaNumero = Math.round(Math.random()*(10-0)+0)

    valorTotal = (sistemaNumero + numberUser)%2

    if (valorTotal == 0 && ParOuImpar == 1) {
        alert ("O resultado foi Par, e voce escolheu Impar \n Entao voce perdeu")

    }else if (valorTotal == 0 && ParOuImpar == 2 ) {
        alert ("O resultado foi Par, e voce escolhei Par \n Entao voce ganhou")
    }else if (valorTotal == 1 && ParOuImpar == 1 ){
        alert("O resultado foi Impar, e voce escolheu Impar \n Entao voce ganhou")
    } else { 
        alert ("o resultado foi Impar, e voce escolheu Par \n Entao voce perdeu")
    }
}

function Exercicio14(){
    contador++
}
function Resultado(){
    alert("voce clicou "+ contador)
}