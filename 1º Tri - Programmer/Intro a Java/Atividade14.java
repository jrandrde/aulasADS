import javax.swing.*;

class Atividade14
{
	public static void main (String entrada[])
	{
	int n1, n2;
	double div, pot;
	String msg="";
	
	n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro: "));
	n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite outro número inteiro: "));
	
	div = n1 / n2;
	pot = Math.pow(n1, n2);
	
	msg = msg + "quociente da divisão: " + div + "\n";
	msg = msg + "potência de " + n1 + " por " + n2 + ": " + pot + "\n";
	JOptionPane.showMessageDialog(null, msg);
	
System.exit(0);
	}
}




	
	