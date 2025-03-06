Algoritmo "Exemplo3_Matriz"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/11/2024
Var
// Seção de Declarações das variáveis 

numeros: vetor [1..3,1..2] de inteiro
i, j: inteiro
soma:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

soma <- 0
PARA i DE 1 ATE 3 FACA
     PARA j de 1 ate 2 faca
     Escreva("Digite o valor para a linha ", i, " e coluna ", j,": ")
     Leia(numeros[i, j])
     soma <- (numeros [i, j])+2
     Escreval("O valor da linha ", i, " e coluna ", j, " é igual a : ", soma)
     fimpara
Fimpara



Fimalgoritmo