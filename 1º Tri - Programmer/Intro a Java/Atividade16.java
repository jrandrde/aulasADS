import javax.swing.*;

public class Atividade16
{
	public static void soma (int vet[])
	{
		int s=0;
		
		for (int i = 0 ; i<vet.length; i++)
		{
			s = s + vet[i];
		}
		JOptionPane.showMessageDialog(null, "A somatória é: " + s);
	}
	
	public static int produto (int vet[])
	{
		int p=1;
		
		for (int i = 1; i<vet.length; i++)
		{
			p = p * vet[i];
		}
		return p;
	}
	
	public static void main (String entrada[])
	{
		int s=0, vetor[] = {3, 6, 9, 12, 15};
		int r;
			
		soma(vetor);
		r = produto(vetor);
		JOptionPane.showMessageDialog(null, "O produto é: " + r);
		System.exit(0);
	}
}

		
		
		
		


		 
	
	
	
		
	
	
		
	
	
	
	