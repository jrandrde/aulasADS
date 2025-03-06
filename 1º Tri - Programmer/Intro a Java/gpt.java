import javax.swing.*;

public class gpt {
    public static void main(String[] entrada) {
        int n1, n2, resultado = 1;
        char op;
        String msg = "", msgEntr = "Escolha uma opção:\n1 - Produto dos dois números (se ambos forem positivos)\n2 - Produtória do primeiro número, o número de vezes do segundo número\n";

        // Entrada de dados
        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro número inteiro: "));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo número inteiro: "));
        op = JOptionPane.showInputDialog(msgEntr).charAt(0);

        // Lógica do programa
        switch (op) {
            case '1': {
                // Calcula o produto dos dois números se ambos forem positivos
                if (n1 >= 0 && n2 >= 0) {
                    resultado = n1 * n2;
                    msg = "Produto de " + n1 + " x " + n2 + " = " + resultado;
                } else {
                    msg = "Os números devem ser positivos para calcular o produto.";
                }
                break;
            }
            case '2': {
                // Calcula a produtória do primeiro número pelo segundo número
                resultado = 1; // Inicializa o resultado da produtória
                for (int i = 1; i <= n2; i++) {
                    resultado *= n1;
                }
                msg = "Produtória de " + n1 + " por " + n2 + " vezes = " + resultado;
                break;
            }
            default:
                // Mensagem para opção inválida
                msg = "Opção inválida. Por favor, escolha 1 ou 2.";
        }

        // Exibe o resultado
        JOptionPane.showMessageDialog(null, msg);

        // Encerra o programa
        System.exit(0);
    }
}
