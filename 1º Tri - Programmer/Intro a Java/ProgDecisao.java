import javax.swing.*;

public class ProgDecisao
{
	public static void main (String entrada[])
	{
		int n1;
		char op=0;
		String msg="", msgEntr="Digite 1 para par/impar\nDigite 2 para positivo/negativo";
		
		n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro"));
		op = (JOptionPane.showInputDialog(msgEntr)).charAt(0);
		
		switch(op)
		{
			case '1':
			{
				if(n1 % 2 == 0)
				{
					msg = msg + n1 + " é par.\n";
				}
				else
				{
					msg = msg + n1 + " é ímpar.\n";
				}
			}
				break;
			
			case '2':
			{
				if(n1 > 0)
				{
					msg = msg + n1 + " é positivo.\n";
				}
				else
				{
					msg = msg + n1 + " não é positivo.\n";
				}
			}
				break;
			
			default: JOptionPane.showMessageDialog(null, "Opção invalida, calculos não realizados.");
		}
					
			if (op == '1' || op == '2')
			{
				JOptionPane.showMessageDialog(null, msg);
			}
			System.exit(0);
		
	}
}

		
		