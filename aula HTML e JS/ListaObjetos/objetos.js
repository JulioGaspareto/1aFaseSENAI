const produtos = [
    {nome:"calculadora",preco:15.00,categoria:"eletronico"},
    {nome:"berserker",preco:12.50,categoria:"livro"},
    {nome:"VANS KNU SKOOL",preco:230.00,categoria:"tenis"},
    {nome:"Premium Chihiro",preco:149.99,categoria:"roupa"},
    {nome:"vagabond",preco:13.00,categoria:"livro"},
    {nome:"Nike Air Max Plus",preco:370.00,categoria:"tenis"},
    {nome:"calça baggy",preco:98.00,categoria:"roupa"},
    {nome:"fone bluetooth",preco:160.00 ,categoria:"eletronico"},
    {nome:"sense life",preco:10.99,categoria:"livro"}
]

function buscarProdutos(nomeProcurado){
return produtos.find(produtos => produtos.nome.toLocaleLowerCase() === nomeProcurado.toLocaleLowerCase())
}

let produtoProcurado = buscarProdutos("vagabond")
console.log(produtoProcurado)

let livroFoda = {
    titulo:"Caminhada Noturna",
    autor:"Julio G.",
    emprestado: false,
    
    emprestar(){
        if(!this.emprestado){
            this.emprestado = true
            console.log("livro emprestado")
        } else{
            console.log("livro ja ta emprestado")
        }
    },

    devolver(){
        if(this.emprestado){
            this.emprestado = false
            console.log("Livro devolvido")
        }else (
            console.log("esse livro ja ta aqui")
        )
    }
}
console.log("Livro ta emprestado?: "+ livroFoda.emprestado)

livroFoda.emprestar()
console.log(livroFoda.emprestado)
livroFoda.emprestar()
livroFoda.devolver()
console.log(livroFoda.emprestado)
livroFoda.devolver()
console.log(livroFoda.emprestado)

let conversorTemp = {
    tempCelsius:20,
    tempFahre:77,

    tempF(){
        return (this.tempCelsius * 9 / 5) + 32
    },
    tempC(){
        return (this.tempFahre - 32)* 5/9
    }
}

console.log(conversorTemp.tempF())
console.log(conversorTemp.tempC())

let agenda = {contatos:[],
    
    adicionarAlguem(nome,telefone){
        this.contatos.push({nome,telefone})
    console.log("contato "+nome + " adicionado")
    },

    removerAlguem(nome){
       let removendo = this.contatos.findIndex(contato => contato.nome === nome)
  if(removendo !== -1){ 
this.contatos.splice(removendo, 1)
console.log("contato removido")

   }else{
    console.log("contado nao encontrado")
   }
    },

    listadosContatos(){
        if(this.contatos.length === 0){
            console.log("nao tem contatos")
        }else{
            console.log("Seus contatos: ")
            this.contatos.forEach(contato => {
                console.log(contato.nome+": "+contato.telefone)
            })
        }
    }

}
agenda.adicionarAlguem("Julio", "1234-5678")
agenda.adicionarAlguem("Bruno", "9999-0000")

agenda.listadosContatos()

agenda.removerAlguem("Julio")

agenda.listadosContatos()


let aluno = {
    nome:"Julio",
    disciplinas:[
        {nome: "matematica", nota:8},
         {nome: "portugues", nota:7},
          {nome: "historia", nota:9}
    ],

    mediaDasMaterias(){
        let soma = this.disciplinas.reduce((numero,materia)=> numero + materia.nota,0)
        return (soma / this.disciplinas.length).toFixed(2)
    }
}
console.log("media das notas")
console.log(aluno.mediaDasMaterias())

let carrinho = {
itens: [],

adicionar(nome, quantidadeDeproduto) {
let produto = produtos.find(prod => prod.nome === nome)
 if (!produto) return console.log("Produto não encontrado")
 this.itens.push({ nome,preco:produto.preco,quantidadeDeproduto})},

remover(nome) {
this.itens= this.itens.filter(item=>item.nome!== nome)
  },

total() {
 let total = this.itens.reduce((soma, item) => soma + item.preco * item.quantidadeDeproduto, 0)
console.log("Total: R$"+total.toFixed(2))
  },

  listar() {
    console.log("Carrinho:");
    this.itens.forEach(final => {
      console.log( final.quantidadeDeproduto+  "x "+ final.nome +"| R$"+ (final.preco * final.quantidadeDeproduto).toFixed(2))
    })
  }
}


carrinho.adicionar("vagabond", 2)
carrinho.adicionar("fone bluetooth", 1)
carrinho.listar()
carrinho.total()
carrinho.remover("vagabond")
carrinho.listar()

let alunos = [
  { nome:"Julio", media: 8 },
  { nome: "Carlos", media: 5.5 },
  { nome:"Ana",media: 7 },
  { nome:"Bruna", media: 4 },
  { nome: "João", media: 6.5 }
]

let soAprovados=alunos.filter(aluno => aluno.media > 6).map(aluno => aluno.nome)
console.log("Alunos aprovados:", soAprovados)


let moedaConvert = {
  taxas: {
    bra: { us: 0.19, euro: 0.18 },
    us: { bra: 5.25, euro: 0.95 },
    euro: { bra: 5.60, us: 1.05 }
  },

converterMoedas(valor, detal, paratal) {
if (detal === paratal) return valor
let taxaMoedas=this.taxas[detal] [paratal]

if (!taxaMoedas) {
  console.log("Conversao não da.")
return null}

    let convertido = valor * taxaMoedas
    console.log(valor, detal +"="+ convertido.toFixed(2) ,paratal)
    return convertido
  }
}
moedaConvert.converterMoedas(100, "bra", "us")
moedaConvert.converterMoedas(50, "euro", "bra")
moedaConvert.converterMoedas(20, "us", "us") 


let banco = {
    contasBanco:[
        {nome:"Julio", saldo: 1000},
        {nome:"Vitor", saldo: 4300},
        {nome:"Yuri", saldo: 200},
        {nome:"Rodrigo", saldo: 453}
        
    ],

    depositar(nome,valor){
        let conta = this.contasBanco.find(cont => cont.nome === nome)
        if (!conta) {return console.log("conta nao encontrada")
    }else{
        conta.saldo += valor 
        console.log("deposito de R$" + valor + ", para "+nome+ "\nSaldo atual: R$"+conta.saldo)
    }},

    sacar (nome,valor){
        let conta = this.contasBanco.find(cont => cont.nome === nome)
        if (!conta) {return console.log("conta nao encontrada")
    }else if (conta.saldo < valor){return console.log("saldo insuficiente")
}else{
    conta.saldo -= valor 
    console.log ("saque de R$"+ valor + "realizado. Valor atual de R$"+conta.saldo)
}
    },

saldoTotal() {
    let total = this.contasBanco.reduce((soma, cont) => soma + cont.saldo,0)
    console.log("o saldo do banco é de R$"+total)

return total
}
    }



banco.depositar("Julio",360)
banco.sacar("Ana", 100)
banco.saldoTotal()