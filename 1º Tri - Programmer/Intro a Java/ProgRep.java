import javax.swing.*;

public class ProgRep
{
    public static void main(String entrada[])
    {
        int Tabuada;
        char op = 0;
        String msg = "", msgEntr = "Digite 1 repetição for\nDigite 2 repetição while\nDigite 3 para repetição do/while";

        Tabuada = Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro"));
        op = (JOptionPane.showInputDialog(msgEntr)).charAt(0);

        switch(op)
        {
            case '1':
            {
                msg = msg + "Tabuada do " + Tabuada + " pelo for: \n\n";
                for(int i = 1; i <= 10; i = i + 1)
                {
                    msg = msg + Tabuada + " x " + i + " = " + Tabuada * i + "\n";
                }
                break;
            }
            case '2':
            {
                msg = msg + "Tabuada do " + Tabuada + " pelo while:\n\n";
                int i = 1;
                while(i <= 10)
                {
                    msg = msg + Tabuada + " x " + i + " = " + Tabuada * i + "\n";
                    i++; // Incrementar i
                }
                break;
            }
            case '3':
            {
                msg = msg + "Tabuada do " + Tabuada + " pelo do/while: \n\n";
                int i = 1;
                do
                {
                    msg = msg + Tabuada + " x " + i + " = " + Tabuada * i + "\n";
                    i++; // Incrementar i
                } while (i <= 10); // Colocar a condição aqui
                break;
            }
        }

        //saída de resultados
        if (op >= '1' && op <= '3')
        {
            JOptionPane.showMessageDialog(null, msg);
        }
        System.exit(0);
    }
}
