// 1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
// dirigir" se for maior de 18 e tiver carteira
function ExercicioP1_01(){

    let idadeUser = Number(prompt("Digite sua idade para dirigir"))
    while(idadeUser < 18 ){
       idadeUser = Number (prompt("Ops, voce é muito novo para dirigir \n\nDigite sua idade para dirigir"))
    }
    let carteiraUser = Number(prompt("Voce tem carteira? Digite o valor correspondido:\n1.Sim\n2.Não"))
    while(carteiraUser !== 1 ){
        carteiraUser = Number(prompt("Ops, voce nao tem carteira de motorista:"))
    }
alert("Voce ta pronto pra dirigir ")

}
// 2. Verifique se um número digitado é positivo e par.

function ExercicioP1_02() {

  let numeroUsuario = Number(prompt("Digita um numero"))

  while((numeroUsuario % 2 ===1) || (0> numeroUsuario)){
    numeroUsuario = Number (prompt(`O numero ${numeroUsuario} é negativo ou Impar\nDigite um numero par e positivo:`))

  }
  alert("passou")
}

// 3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
// nome for "admin" ou a senha for "1234".

function ExercicioP1_03(){

    const conta = "admin", senhaConta = 1234


    let login = prompt("Digita o nome de usuario:")
    let senha = Number(prompt("Digite a senha"))
    

    while((login !== conta)||(senha !== senhaConta)){

        alert("acesso invalido\nTente novamente")
         login = prompt("Digita o nome de usuario:")
         senha = Number(prompt("Digite a senha"))
    }
    alert("acesso liberado ")
}

// 4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
// negativo.

function ExercicioP1_04(){

    let n1 = Number (prompt("Digite o primeiro numero"))
    let n2 = Number (prompt("Digita o segundo numero "))

    while ()
}