inicializar()

let usuarios = []

function registrarUser(){

    let usuario = {
        
    nome:  document.getElementById("nome").value,
    email: document.getElementById("emailRegister").value,
    senha: document.getElementById("senhaRegister").value
    }
    usuarios.push(usuario)

    alert("cadastrado!!!!")

    console.log(usuarios)
    mostrarLogin()
    
}
function logarUser(){
   let email = document.getElementById("emailLogar").value
    let senha = document.getElementById("senhaLogar").value

    for(let i = 0 ; i<usuarios.length; i++){
        
        if(email === usuarios[i].email && senha === usuarios[i].senha){
            alert("login efetuado com sucesso!\n Seja bem vindo " + usuarios[i].nome)
            mostrarProdutos()
       }//else{
        //     alert("Login nao deu ai ")
        // }
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
    document.getElementById("navBar").style.display = "flex"
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

function inicializar(){
    mostrarLogin
}
