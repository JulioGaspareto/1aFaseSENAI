let combustivel = prompt("Quanto de combustivel tem ?")
let climaPlaneta = prompt("o clima esta bom (sim/nao)")

climaPlaneta = climaPlaneta.toLocaleLowerCase()


if (combustivel >= 50 && climaPlaneta == "sim"){
    console.log("Pouso autorizado!")
}else{
    console.log("Abortar Missão !")
}