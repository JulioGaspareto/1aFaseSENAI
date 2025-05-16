let temDinheiro = prompt ("Tem dinheiro(Sim/Nao):")
let estaComFome = prompt ("Esta com fome(Sim/Nao):")
let hojeEhSexta = prompt ("Hoje é sexta-feira(Sim/Nao):")

if (temDinheiro == "Sim" && estaComFome == "Sim"){
    console.log("Vamos pedir pizza!")
} else if (hojeEhSexta == "Sim") {
    console.log("Vamos pedir pizza!")
} else {
    console.log("Hoje não é dia de pizza.")
}