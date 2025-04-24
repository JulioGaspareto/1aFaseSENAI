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