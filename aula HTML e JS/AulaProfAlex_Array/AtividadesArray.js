//Contagem ivertida

let numeros = [10,20,30,40,50,60,70,80,90,100]

let numerosInvertidos  = numeros.map((elemento, index) => {

    let tamanhoArray = numeros.length - 1 
    return numeros[tamanhoArray - index]
})

console.log(numerosInvertidos)