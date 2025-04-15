//Programar as seguintes entradas de dados de
//um cliente: Nome, idade, nacionalidade,
//endereço. Após digitados os dados, mostrar
//na tela a seguinte mensagem "Cliente [Nome],
//[idade] anos, [nacionalidade], reside no 
//endereço [endereço]." Exemplo: Cliente Lucas,
//29 anos, brasileiro, reside no endereço 
//Rua Victor Meirelles, 281, Centro, Florianópolis.


programa
{
	funcao inicio ()
	{
	
	cadeia nomeUser, enderecoUser, nacionalidadeUser
	inteiro idadeUser
	
	
	 escreva("Qual seu nome: ")	leia(nomeUser)
	 escreva("Qual sua idade: ") leia (idadeUser)
	 escreva("Qual sua nacionalida: ") leia(nacionalidadeUser)
	 escreva("Qual seu endereço: ") leia(enderecoUser)
		
		escreva("Cliente ",nomeUser, ", ", idadeUser," anos, ",nacionalidadeUser, ", reside no endereço ", enderecoUser, "." )
		
	}
}