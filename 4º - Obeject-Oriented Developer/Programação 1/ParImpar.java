public class ParImpar {
	public static void main (String[] args) {
		int numero = 5;
		String resultado = (numero % 2 == 0) ? "Par." : "Ímpar.";
		System.out.println("o número é: " + resultado);
	}
}