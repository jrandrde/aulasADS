Algoritmo "Exemplo3_Matriz"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/11/2024
Var
// Se��o de Declara��es das vari�veis 

numeros: vetor [1..3,1..2] de inteiro
i, j: inteiro
soma:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...

soma <- 0
PARA i DE 1 ATE 3 FACA
     PARA j de 1 ate 2 faca
     Escreva("Digite o valor para a linha ", i, " e coluna ", j,": ")
     Leia(numeros[i, j])
     soma <- (numeros [i, j])+2
     Escreval("O valor da linha ", i, " e coluna ", j, " � igual a : ", soma)
     fimpara
Fimpara



Fimalgoritmo