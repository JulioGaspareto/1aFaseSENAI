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

    while (n1 < 0 && n2 < 0 ||n1>0 && n2 > 0){

        alert("Os dois sao positivos ou negativos\nDigite valores diferentes")
        n1 = Number (prompt("Digite o primeiro numero"))
        n2 = Number (prompt("Digita o segundo numero "))
    }

    if (n1 >= 0 && n2 < 0 || n1<0 && n2 >= 0 ){
        alert("conseguiu")
    }
}
// 5. Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a
// 10.
function ExercicioP1_05(){

    const aprovaUser = 6 
    let notaUser = Number(prompt("Digite sua nota"))
    
    if(aprovaUser > notaUser){
        alert(`Sua nota foi ${notaUser} e infelizmente voce nao foi aprovado`)
    } else {
        alert(`Sua nota foi ${notaUser} e voce foi aprovado`)
    }
    
}
function ExercicioP1_06(){
    let numeroUsuario = Number(prompt("Digite um numero de 1 a 100:"))
    while(numeroUsuario >100 || numeroUsuario < 1) {
        numeroUsuario = Number(prompt("Numero invalido"))
    }
    alert(`O numero ${numeroUsuario} é valido`)

}
function ExercicioP1_07(){

    let idadeUser = Number(prompt("Digite sua idade:"))
    let estudaUSer = prompt("Voce estuda?\nSim\nNao")

    estudaUSer = estudaUSer.toLocaleLowerCase()

    if (idadeUser < 18 || estudaUSer == "sim" ){
        alert("Voce tem meia entrada")

    }else{
    alert("voce nao tem meia entrada")
}
}
function ExercicioP1_08(){
    let termosUser = prompt("Voce aceita os termos do site?\nSim\nNao")
     termosUser = termosUser.toLocaleLowerCase()
       while(termosUser !== "sim"){
        alert("Aceite os termos para proceguir")
        termosUser = prompt("Voce aceita os termos do site?\nSim\nNao")
       }
    let emailUser = prompt("Ja registrou um email?\nSim\nNao")
      emailUserUser = emailUser.toLocaleLowerCase()
         if (emailUser == "sim"){
            alert("Registro Completo")
         }else {
            alert("Registro Incompleto")
         }
}
function ExercicioP1_09(){

    let pesoUser = Number(prompt("Digite seu peso (Kg):"))
    let alturaUser = Number(prompt("Digita sua altura (m)"))

    if((pesoUser >= 50 && pesoUser <= 90) && alturaUser >= 1.60){
        alert("apto para o esporte")
    }else {
        alert("nao")
    }

}
