let idadeUser = Number(prompt("Voce tem mais de 18 Anos ???"))
const idadeSite = 18
while( idadeUser < idadeSite){
    alert("Voce nao tem 18 anos ou mais, vaza do site ")
    idadeUser = Number(prompt("Voce tem mais de 18 Anos ???"))
}