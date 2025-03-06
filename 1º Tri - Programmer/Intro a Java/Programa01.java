// salvar como Programa01.java

public class Programa01 {
    public static void main(String entrada[]) {
        // Declaração de variáveis
        int NumInt;
        double NumReal, soma;
        char Caracter;

        // Entrada de dados
        NumInt = Integer.parseInt(entrada[0]);
        NumReal = Double.parseDouble(entrada[1]);
        Caracter = entrada[2].charAt(0);

        // Processamento
        soma = NumInt + NumReal;

        // Saída de resultados
        System.out.println(NumInt + " + " + NumReal + " = " + soma + " sinal " + Caracter);

        System.exit(0);
    }
}

		