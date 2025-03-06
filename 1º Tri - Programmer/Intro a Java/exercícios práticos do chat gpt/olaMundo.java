import java.util.Scanner; // Importa a classe Scanner

public class olaMundo {
    public static void main(String[] args) 
	{
		String nome;
		
        Scanner scanner = new Scanner(System.in); // Cria um objeto Scanner para ler entrada do usuário
        
        System.out.print("Digite seu nome: "); // Exibe a mensagem no console
        String nome = scanner.nextLine(); // Lê a entrada do usuário e armazena na variável nome

		System.out.println("Olá, " + nome + " ! Seja bem-vindo ao Java");

        scanner.close(); // Fecha o Scanner para liberar recursos
		System.exit(0);		
    }
}


		
		
	
		
		