import javax.swing.*;

public class ProgTemp
{
	public static void main (String entrada[])
	{
		double c, k, re, ra, f;
		String msg="Temperatura em Cº convertida para \n";
		
		c = Double.parseDouble(JOptionPane.showInputDialog("Digite um valor para a temperatura em Cº: "));
		
		k = c + 273.15;
		re = c * 0.8;
		ra = c * 1.8 + 32 + 459.67;
		f = c * 1.8 + 32;
		
		msg = msg + "Kelvin: " + k + " K " + "\n\n";
		msg = msg + "Réamur: " + re + " Re " + "\n\n";
		msg = msg + "Rankine: " + ra + " Ra " + "\n\n";
		msg = msg + "Fahrenheit: " + f + " F " + "\n\n";
		
		JOptionPane.showMessageDialog(null, msg);
		System.exit(0);
	}
}
		
		
		
		
		
		
		
		