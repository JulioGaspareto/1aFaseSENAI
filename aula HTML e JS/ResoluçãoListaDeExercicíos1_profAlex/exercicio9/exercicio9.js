let nomeAmigo = prompt("Qual o nome do amigo sorteado?")

nomeAmigo = nomeAmigo.toLocaleLowerCase()

if (nomeAmigo == "carlos"){
    console.log("Compre um livro")

}else if (nomeAmigo == "ana"){
    console.log("compre um chocolate")

}else{
    console.log("Compre um presente surpresa")
}