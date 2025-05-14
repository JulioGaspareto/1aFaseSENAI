
// Mostre apenas os números pares de 1 a 20.
function ExercicioP1_1(){

  let constante = 1
  let pares = ""
    while(constante <= 20){

        if (constante % 2 === 0 ){
         pares += constante + " , "
        }
        constante++
        
    }
alert ("os numero pares sao: "+  pares.slice(0 , -2) )

}
// Mostre apenas os números ímpares de 1 a 20.
function ExercicioP1_2(){

    let constante = 1
    let impares = ""

    while(constante <= 20 ){
        if (constante % 2 === 1 ){
            impares += constante + " , "
        }
     constante ++

    }

    alert("Os numeros impares são\n========================\n "+ impares.slice(0, -2) + "\n========================" )

}
// Imprima “Olá, mundo!” 5 vezes.
function ExercicioP1_3(){

    let quantidadeUser = Number(prompt(`Digite quantas vezes voce que o "Ola Mundo".`))
    let escrevendo = ""
    let repetir = 1 
    while(repetir <= quantidadeUser) {

        escrevendo += "\nOla mundo "   
        repetir++
    }
    alert(escrevendo)


}


// 4. Conte de 0 a 50 pulando de 5 em 5
function ExercicioP1_4(){
let repetir = 1, p2 = ""

    while (repetir <= 10){

        p2 += repetir * 5 + " , " 
        repetir++
    }
    alert("Conte de 0 a 50 pulando de 5 em 5:\n" + p2.slice(0,-2))
}
// Conte de 100 até 0 diminuindo de 10 em 10.

function ExercicioP1_5(){
let repetir = 10 , p2 =""
    while (repetir >= 1){

        p2 += repetir  *  10 + " , "
        repetir--
    }
    alert(" Conte de 100 até 0 diminuindo de 10 em 10:\n"+p2.slice(0,-2))

}

// Conte de 0 até 30 e mostre apenas os múltiplos de 3.
function ExercicioP1_6(){

    let repetir = 1 , p2 = ""

    while(repetir <= 30){
        if (repetir % 3 === 0 ){

            p2 += repetir + " , "

        }   
    repetir++
}
    alert("Conte de 0 até 30 e mostre apenas os múltiplos de 3:\n"+ p2.slice(0, -2))

}
// Conte de 1 até 10 e mostre o quadrado de cada número.

function ExercicioP1_7(){
let repetir = 1 , p2 = ""

    while(repetir <= 10){
        
        p2 += repetir * repetir + " , "

        repetir++

    }
    alert("Conte de 1 até 10 e mostre o quadrado de cada número.:\n" + p2.slice(0, -2))
}
// Conte de 1 até 10 e mostre o cubo de cada número.

function ExercicioP1_8(){
    let repetir = 1 , p2 = ""

    while(repetir <= 10){

        p2 += (repetir * repetir)* repetir + " , "
        repetir++
    }
    alert("Conte de 1 até 10 e mostre o cubo de cada número.\n"+p2.slice(0, -2))
}
// Conte de 1 até 15 e mostre se o número é par ou ímpar.
function ExercicioP1_9(){

    let repetir = 1, p2 = ""

    while (repetir <= 15){
        if(repetir % 2 ===0){
            p2 += repetir + " (Par), "
            
        } else if (repetir % 2 === 1){
            p2 += repetir + " (Impar), "
        }
    repetir++
    }
    alert("Conte de 1 até 15 e mostre se o número é par ou ímpar:" + p2.slice (0, -2))
}
// Conte até 100 e imprima somente os divisíveis por 4.
function ExercicioP1_10(){

    let repetir = 1 , p2 = ""
    while (repetir <= 100){

        if (repetir % 4 === 0 ){

            p2 += repetir + " , "
        }repetir++
    }
alert("Conte até 100 e imprima somente os divisíveis por 4.:\n"+p2.slice(0,-2))
}


function ExercicioP2_6(){

  let cont = 1 , p2 = ""
 while(cont <= 100){
    p2 += cont + " , "
   cont++
 }
 alert(p2.slice (0,-2))
}