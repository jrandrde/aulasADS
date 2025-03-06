public class Programa02 {
    public static void main(String entrada[]) {
        int n1, n2;
        int mod, div;
        double raiz, pot;
        String msg = "";

        // Entrada de dados
        n1 = Integer.parseInt(entrada[0]);
        n2 = Integer.parseInt(entrada[1]);

        // Processamento
        mod = n1 % n2; // Resto da divisão
        div = n1 / n2; // Quociente da divisão
        raiz = Math.sqrt(n1); // Raiz quadrada de n1
        pot = Math.pow(n1, n2); // Potência de n1 elevado a n2

        // Saída de resultados
        msg = "n1 = " + n1 + ", n2 = " + n2 + "\n";
        msg += "Resto da divisão de n1 por n2 = " + mod + "\n";
        msg += "Quociente da divisão de n1 por n2 = " + div + "\n";
        msg += "Raiz quadrada de n1 = " + raiz + "\n";
        msg += "Potência de n1 elevado a n2 = " + pot + "\n";

        System.out.println(msg);
        System.exit(0);
    }
}

	 
	 