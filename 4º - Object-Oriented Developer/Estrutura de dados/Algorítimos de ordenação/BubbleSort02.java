public class BubbleSort02 {
//método para demonstrar a ordenação 
public static void main (String[] args) {
	int[] numeros = {105, 36, 54, 12, 8, 101};
	System.out.println("Ordenação original: ");
	printArray(numeros); //chama o método auxiliar p printar o array na tela
	
	bubbleSort(numeros); //chama o método que ordena o array
	System.out.println("\nArray ordenado: ");
	printArray(numeros); //chama o método auxiliar p printar o array na tela dps da ordenação
	}
	
	//Método que implementa a ordenação por Bubble Sort
	public static void bubbleSort(int[] numeros) {
	int n = numeros.length; //Pega o tamanho do array
	
		//Loop externo: controla o número de "passagens"
		//Em cada passagem, o maior elemento não ordenado flutua para a posição certa
		for (int i=0; i < n - 1; i++){
		// Loop interno: percorre o array, comparando e trocando elementos adjacentes
        // A cada passagem 'i', os últimos 'i' elementos já estão no lugar certo
			for (int j=0; j < n -1; j++){
			// Compara o elemento atual com o próximo
				if(numeros[j] > numeros[j + 1]){
				// Se o elemento atual for maior que o próximo, eles trocam de posição
				int temp = numeros[j]; //Guarda o valor do elemento atual
				numeros[j] = numeros[j + 1]; //Move o próximo elemnto para a posição atual
				numeros[j + 1] = temp; //Coloca o valor guardado na próxima posição
				}
			}
		}
	}
	

	//Método auxiliar para imprimir o array
	public static void printArray(int[] numeros){
	for(int i=0; i < numeros.length; i++){
		System.out.println(numeros[i] + "");
	}
	
	System.out.println();
	}
}