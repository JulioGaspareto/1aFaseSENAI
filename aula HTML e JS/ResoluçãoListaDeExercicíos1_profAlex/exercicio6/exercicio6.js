let quantidadeItens = Number(prompt("Digite a quantidade de produtos comprados:"))
let valorDaCompra = Number (prompt("Valor da sua compra: "))

if(quantidadeItens >= 3 || valorDaCompra >= 100){
    console.log("Desconto aplicado!")

}else{
    console.log("Sem desconto dessa vez.")
}