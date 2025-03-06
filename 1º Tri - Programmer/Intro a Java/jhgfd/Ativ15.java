import javax.swing.*;

public class Ativ15
{
	public static void main (String entrada[])
	{
		int n1, n2, prod=1;
		char op=0;
		String msg="", msgEntr=("1- para multiplicação\n2- para potenciação\n" );
		
		n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro: "));
		n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro: "));
		op = (JOptionPane.showInputDialog(msgEntr)).charAt(0);
		
		switch(op)
		{
			case'1':
			{
				if (n1 >= 0 && n2 >=0 )
				{
					prod = n1 * n2;
					msg = msg + "O produto de " + n1 + " x " + n2 + " é = " + prod + "\n\n";
				}
				else
				{
					msg = msg + "Os números precisam ser inteiros pro programa funcionar animal\n\n";
				}
				break;
			}
			case '2':
			{
				prod=1;
				for (int i=1; i<= n2; i++)
				{
					prod = prod * n1;
				}
				msg = msg + "A potência de " + n1 + " elevado por " + n2 + " é = " + prod + "\n\n";
				break;
			}
			default: JOptionPane.showMessageDialog(null, "Opção inválida, calcúlos não realizados");
		}
		
		if (op == '1' || op == '2')
		{
			JOptionPane.showMessageDialog(null, msg);
		} 
			
		System.exit(0);
	}
}

			
				
		
		
		