
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

        escrevendo += "Ola mundo\n " + repetir   
        repetir++
    }
    alert(escrevendo)


}


function ExercicioP2_6(){

  let cont = 1 
 while(cont <= 100){
    console.log (cont)
   cont++
 }
}