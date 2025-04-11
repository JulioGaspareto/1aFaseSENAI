let pedidoCliente = prompt("Qual o seu pedido, digite o número?\n============ Cardapio ============\n|1 - Café: R$4,23\n|Capuccino: R$6,00 \n|Café expresso: R$5,90 ")

//deixar o pedido maiusculo e minuscolo 
/*let pedidoClienteFormatado = pedidoCliente.toLowerCase()
let pedidoClienteMaiuscul0 = pedidoCliente.toUpperCase()

console.log('minusculo', pedidoClienteFormatado)
console.log('maiusculo', pedidoClienteMaiuscul0)
*/


if(pedidoCliente=="cafe" || pedidoCliente=="Cafe" || pedidoCliente=="café"||pedidoCliente=="Café"){
    console.log("Servindo café ☕")

} else if (pedidoCliente=="Capuccino" ||pedidoCliente=="capuccino" ){
    console.log("Servindo capuccino 🧋")

}else if(pedidoCliente=="cafe expresso" ||pedidoCliente=="Cafe Expresso" ||pedidoCliente== "café expresso"||pedidoCliente=="Café Expresso" ||pedidoCliente== "Expresso"||pedidoCliente=="expresso"){
    console.log("Servindo expresso 🔥")
}else{
    console.log("Desculpe, não temos esse tipo de café 😔")
}