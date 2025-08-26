public class Calculator{
	public static void main (String[] args){
		double n1 = 2;
		double n2 = 5;
		char op = '+';
				
		switch (op){
			case '+': 
				double soma = n1 + n2;
				System.out.println("soma: " + soma);
			break;
			
			case '-': 
				double sub = n1 - n2;
				System.out.println("subtração: " + sub);
				
			break;
			
			case '*': 
				double mult = n1 * n2;
				System.out.println("multiplicação: " + mult);
			break;
			
			case '/': 
				double div = n1 / n2;
				System.out.println("divisão: " + div);			
			break;
			
			default: System.out.println("operação invalída.");
		}
	}
}