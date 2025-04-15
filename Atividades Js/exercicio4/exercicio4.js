let frutaCardapio = prompt("Suco de que sabor voce quer?\nLaranja🍊\nUva🍇\nMorango🍓")

if(frutaCardapio == "Laranja" || frutaCardapio == "laranja"){
    console.log("Preparando seu suco de Laranja 🍊🥤")

} else if(frutaCardapio == "Uva" || frutaCardapio =="uva") {
    console.log("Preparando seu suco de Uva 🍇🥤")

} else if(frutaCardapio == "Morango" || frutaCardapio=="morango") {
    console.log("Preparando seu suco de Morango 🍓🥤")

} else{
    console.log("Infelizmente nao temos este sabor para você 😕")
}