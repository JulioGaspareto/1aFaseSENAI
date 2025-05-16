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

// while é o enquanto do Portugol

function ExemploWhile(){

    let idadeUser = Number(prompt("Digite sua idade para passar\n Sua idade tem que ser +18"))

    while(idadeUser < 18){
        alert ("Voce nao tem idade suficiente para entrar no site")
        idadeUser = Number(prompt("Digite sua idade para passar\n Sua idade tem que ser +18"))
    }
    alert("acesso libertado")

}
function gerarSenha(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$¨&*"
    const numeroAleatorio = Math.floor(Math.random()* caracteres.length );

    return caracteres.charAt(numeroAleatorio)
}


function Exercicio18(){

    let quantidade = Number(prompt("Digite a quantidade de carcteres que tera na sua senha"))
    let senha = ""
    while(quantidade > 0 ){

        senha = senha + gerarSenha()
        quantidade = quantidade - 1

       
    }
    alert ("a senha é: "+ senha)

}
function Exercicio15(){
    let numeroDoUsuario = Number(prompt("Tente acertar o meu numero \n Digite um numero de 1 a 100"))

  let numeroSistema = Math.ceil(Math.random()*(100 - 1)+1)

  while (numeroDoUsuario != numeroSistema){

    numeroDoUsuario = prompt("Nao é "+numeroDoUsuario+ "\ntente novamente ")
  }
    alert ("voce acertou parabens")
}

function Exercicio20 (){

    let p1 ="ABELHA" , p2= "PORCO" , p3= "ARVORE", p4= "BERGAMOTA", p5 = "PRAIA"

    let   ABELHA = 1, PORCO =2 , ARVORE=3 , BERGAMOTA = 4, PRAIA = 5

    

        sortearPalavra =  Math.ceil(Math.random()*(5 - 1)+1)

        if (ABELHA == sortearPalavra ){
           let visivelLetras =  Math.floor(Math.random()* p1.length );

           return P1.charAt(visivelLetras)

           


        }


    


}