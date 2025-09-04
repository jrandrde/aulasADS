class MyStack {
    private int maxSize; // Definindo o tamanho máximo dos arrays dentro da classe
    private int[] stackArray; // Criando o array propriamente dito
    private int top; // Marcando a última posição da stack
    
    //Construtor criando uma nova stack vazia
    public MyStack(int size) {
        this.maxSize = size;
        this.stackArray = new int[maxSize];
        this.top = -1; // Apontando a posição máxima como vazia 
    }

    public void push(int item){
        if(top >= maxSize -1){ // Verifica se stack não está cheia
            System.out.println("\nArray cheio! Não comporta o item: " + item);
            return;
        }

        top++; // Move a marcação do topo da stack (ex: da posição -1 pra posição 0)
        stackArray[top] = item; // Coloca o item dentro do array na nova posição de topo
     System.out.println("\nEsse é o item que você incluiu: " + item);

    }

    public int pop() {
        if(top == -1){ // Verifica se a stack não está vazia
            System.out.println("\nArray vazio! Não tem o que tirar.");
            return -1;
        }

        int itemToReturn = stackArray[top]; // Pega o item do topo
        top--; // Move a marcação do topo da stack (ex: posição 1 pra posição 0)
        System.out.println("\nEsse é o item retirado: " + itemToReturn);
        return itemToReturn; // Retorna o item que acabamos de pegar
    }

    public void peek() {
        if(top == -1) { // Verifica se a stack não está vazia
            System.out.println("\nArray vazio! Não tem o que mostrar.");
            return;
        }
        System.out.println("\nItem no topo: " + stackArray[top]); // Printa o item que está no topo
    }

    public boolean isEmpty() {
        return top == -1; // Verifica e retorna se a stack está vazia 
    }
}

public class TransferStacks {
     public static void main (String[] args) {
        // Criando duas novas stacks
        MyStack sourceStack = new MyStack(5); 
        MyStack destinationStack = new MyStack(5);
        // Incluindo novos itens dentro da stack source
        sourceStack.push(10);
        sourceStack.push(20);
        sourceStack.push(30);
        sourceStack.push(40);
        sourceStack.push(50);

        System.out.println("\nArray original: " + sourceStack);
        // Loop para retirar um item de uma stack e incluir em outra enquanto houver itens na source
        while(!sourceStack.isEmpty()) {
            int itemToInclude = sourceStack.pop();
            destinationStack.push(itemToInclude);
            System.out.println("\nItens removidos: " + itemToInclude);
        }

        System.out.println("\nArray final: " + destinationStack);
    }

}