let usuario = {
    nome: "um",
    email: "dois",
    senha:  "tres"
    
}
function registrarUser(){
    usuario.nome = document.getElementById("nome").value
    usuario.email = document.getElementById("emailRegister").value
    usuario.senha = document.getElementById("senhaRegister").value
    alert("cadastrado!!!!")
    console.log(usuario)
}
function logarUser(){
   let email = document.getElementById("emailLogar").value
    let senha = document.getElementById("senhaLogar").value
    
    if(email === usuario.email && senha === usuario.senha){
        alert("login efetuado com sucesso!")
        mostrarProdutos()
    }else{
        alert("Login nao deu ai ")
    }
}
function mostrarLogin(){
    esconderTodas()
    mostrarBotao()
    document.getElementById("login").style.display = "flex"
     document.getElementById("esconderBL").style.display = "none"
}
function mostrarCadastro(){
    esconderTodas()
    mostrarBotao()
    document.getElementById("cadastro").style.display = "flex"
     document.getElementById("nome").focus()
      document.getElementById("esconderBC").style.display = "none"
}

function mostrarProdutos(){
    esconderTodas()
    mostrarBotao()
    document.getElementById("produtos").style.display = "flex"
     document.getElementById("esconderBP").style.display = "none"

}
function esconderTodas(){
    document.getElementById("login").style.display = "none"
     document.getElementById("cadastro").style.display = "none"
      document.getElementById("produtos").style.display = "none"
}


function mostrarBotao(){
    document.getElementById("esconderBL").style.display = "flex"
     document.getElementById("esconderBC").style.display = "flex"
      document.getElementById("esconderBP").style.display = "flex"
}
