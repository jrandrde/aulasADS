Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/10/2024
Var
// Se��o de Declara��es das vari�veis 
i: inteiro
notas: vetor [1..5] de real
nomes: vetor [1..5] de caractere
media: real
soma: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

soma <- 0
para i de 1 ate 5 faca
Escreva("Digite o nome do(a) aluno(a)", i, " de 5: ")
Leia(nomes[i])
Escreva("Digite a nota do(a) aluno(a) ", nomes[i], " de 5: ")
Leia(notas[i])
soma <- soma + notas[i]
fimpara

media <- soma/i

Escreval("A m�dia de nota da turma �: ", media)

Fimalgoritmo