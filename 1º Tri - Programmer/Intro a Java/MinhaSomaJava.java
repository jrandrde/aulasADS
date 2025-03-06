// Salvar como MinhaSomaJava.java

// Nome da classe
public class MinhaSomaJava {
    // Módulo principal com a entrada pela linha de comando
    public static void main(String entrada[]) {    
        // Declaração de variáveis 
        int n1, n2, soma;

        // Entrada de dados
        n1 = Integer.parseInt(entrada[0]);
        n2 = Integer.parseInt(entrada[1]);

        // Processamento
        soma = n1 + n2;

        // Saída de resultados
        System.out.println(n1 + " + " + n2 + " = " + soma);
        System.exit(0);
    }
}
