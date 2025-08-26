public class CaixaEletronico {
	public static void main (String[] args) {
		int opcao = 1;
		
		switch (opcao) {
			case 1: System.out.println("Consultar saldo"); break;
			case 2: System.out.println("Realizar deposito"); break;
			case 3: System.out.println("Realizar saque"); break;
			default: System.out.println("Opção inválida.");
		}
	}
}