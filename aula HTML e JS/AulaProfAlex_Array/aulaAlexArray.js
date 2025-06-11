let nomes = ["Joao","Clara","Rodrigo","Paulo","Vini","Barbosa","Yuri"] //array de nomes
console.log(nomes[10])
console.log(nomes.length) // para ver qual o tamanho do nosso array

// for(let contador = 0; contador < nomes.length;contador++){
//   // console.log(nomes[contador])
// } // para mostrar os nomes do array

//nomes[4] = "Alex" //nao é bom pular, pois vai ter numeros antes vazios

nomes.forEach((element , index ) =>
    {
        console.log(element + "@gamil.com")
    }
);

 nomesComSobrenome = nomes.map((nome) =>{
    return nome + " da Silva"
})
console.log(nomesComSobrenome)

 let nomesFiltrados = nomes.filter((nome) => nome.length > 5)
 console.log(nomesFiltrados)
 let findNome = nomes.find((nome) => nome.length > 5)
 console.log(findNome) 


//  //numero
//  let numero = [1,2,3,4,5,6,7,8,9,10]

//  let nuemrosInvertidos = numeros.map((nume) => {
//     console.log(nume)
//  })