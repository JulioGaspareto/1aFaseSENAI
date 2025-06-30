const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];


let numeroMaiorQ10 = numeros.filter(numero => numero > 10)
console.log(numeroMaiorQ10);
console.log(`___________________________________________________________________`)
let numeroDobrado = numeros.map(numero => numero * 2)
console.log(numeroDobrado)
console.log(`___________________________________________________________________`)
let todosSomados = numeros.reduce((valorAcumula, valorAtu)=> valorAcumula + valorAtu ) 
console.log(todosSomados)                                                                  
console.log(`___________________________________________________________________`)
let maiorNumer = numeros.sort((numero,outroNumero) => numero - outroNumero)
let ultimo  = maiorNumer.length
console.log(maiorNumer[ultimo - 1])
console.log(`___________________________________________________________________`)
let menorNumero = numeros.sort((numero, outroNumero)=>outroNumero - numero)
let outroUltimo = menorNumero.length
console.log(menorNumero[outroUltimo - 1]);
console.log(`___________________________________________________________________`);
let numeroOrdem = numeros.sort((numero, outroNumero)=> numero - outroNumero)
console.log("\nOrdenar os números em ordem crescente. \n" + numeroOrdem)
console.log(`___________________________________________________________________`);
let numeroImpar = numeros.filter(numero => numero % 2 !== 0)

console.log("\nnumero Impar \n" + numeroImpar)

let numerosMaiorQ3 = numeros.every(numero => numero > 3)
console.log("\n Numeros maior que 3 \n" + numerosMaiorQ3)

let verificarMaiorq100 = numeros.every(numero => numero > 100)
        console.log("\nnumeros maior que 100\n" + verificarMaiorq100)

let somaDosNumeros = numeros.reduce((numeroUm, numeroDois) => numeroUm + numeroDois)
let mediaDeTodos = somaDosNumeros / numeros.length
console.log("\nMedia de Todos os numeros\n" + mediaDeTodos)


let nomesEmOrdem = nomes.sort()
console.log("\n Nomes em ordem\n" + nomesEmOrdem)

let nomesMaisde5Letras = nomes.filter(nomes => nomes.length > 5)
console.log("\nnomes com mais de 5 letras\n" + nomesMaisde5Letras)

let nomesMaiusculo = nomes.map(nomes => nomes.toUpperCase())
console.log("\nNomes em maiusculo\n" + nomesMaiusculo)

let verificarNomeComB = nomes.some(nomes => nomes.startsWith("B"))
console.log("\nTem nome com B\n" + verificarNomeComB)


let acharDaniel = nomes.some(nome => nome.toUpperCase() === "DANIEL")
console.log("\nTem Daniel?\n"+acharDaniel)

let quantidadeLetras = nomes.map(nome => nome.length)
console.log("\n quantidade de letras de cada nome  \n" + quantidadeLetras)

let nomesJuntos = nomes.join(", ")
console.log("\n Nomes juntos \n" + nomesJuntos )


let produtoEletronico = produtos.filter(produto => produto.categoria === "Eletrônicos")
console.log(produtoEletronico)


let nomeDosProdutos = produtos.map(produto => produto.nome)
console.log("Produtos disponiveis:\n")
console.log(nomeDosProdutos)

let desconto = produtos.map(produto => produto.preco *0.9)
console.log(desconto)

let valorTotal = produtos.reduce((acumulado, produto) => acumulado + produto.preco, 0);
console.log(valorTotal)



let ordenado = produtos.sort((numero,outroNumero)=> outroNumero.preco - numero.preco)
let produtoCaro = ordenado[0]
console.log("mais caro")
console.log(produtoCaro)

let vaiProBarato = produtos.sort((numeroUm,numeroDois)=> numeroUm.preco - numeroDois.preco)
console.log(vaiProBarato)

function categoriaProduto(categoria){
return produtos.filter(produto => produto.categoria === categoria)    
}

let paraEletronicos = categoriaProduto("Eletrônicos")
console.log(paraEletronicos)

let paraRoupa = categoriaProduto("Roupas")
console.log(paraRoupa)

let prdutosCurtos = produtos.map(produto => {return { nome:produto.nome, preco:produto.preco
}})
console.log(prdutosCurtos)


let numerosVerific = produtos.every(produto => produto.preco > 5)
console.log("tem produto mais que 5 pila: " + numerosVerific)


let numerosPar = numeros.filter(numero => numero % 2 === 0)
console.log(numerosPar) 

let numerosQadrado = numerosPar.map(numeros => numeros * numeros)
console.log(numerosQadrado)


let nomeLongo = nomes.reduce ((maior, queta)=> {
        return queta.length > maior.length ? queta : maior
})
console.log(nomeLongo)

let terminaComVogal = nomes.every(nome => {
let ultimaLetra = nome.slice(-1).toLowerCase()
  return ["a", "e", "i", "o", "u"].includes(ultimaLetra)
})

console.log(terminaComVogal)


let juntandoNComNo = [...numeros,...nomes];
console.log(juntandoNComNo)


let roupasMenosQue100 = produtos.filter(produto => produto.preco < 100 && produto.categoria === "Roupas").map(produto => produto.nome)
console.log(roupasMenosQue100)


function mediaDosEletronicos(produtos) {
  let eletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos")
  let somaDeTUdo = eletronicos.reduce((tudo, produto) => tudo + produto.preco, 0)
  return (somaDeTUdo/ eletronicos.length).toFixed(2)
}

console.log(mediaDosEletronicos(produtos))
