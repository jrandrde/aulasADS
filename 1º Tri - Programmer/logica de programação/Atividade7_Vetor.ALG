Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/10/2024
Var
// Seção de Declarações das variáveis 
i: inteiro
notas: vetor [1..5] de real
nomes: vetor [1..5] de caractere
media: real
soma: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

soma <- 0
para i de 1 ate 5 faca
Escreva("Digite o nome do(a) aluno(a)", i, " de 5: ")
Leia(nomes[i])
Escreva("Digite a nota do(a) aluno(a) ", nomes[i], " de 5: ")
Leia(notas[i])
soma <- soma + notas[i]
fimpara

media <- soma/i

Escreval("A média de nota da turma é: ", media)

Fimalgoritmo