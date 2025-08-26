public class BubbleSort {
	//Método principal para demonstrar a ordenação
	public static void main (String [] args) {
		int[] arr = {2, 3, 5, 1, 6, 4, 8, 10, 9, 7};
		System.out.println("Array original: ");
		printArray(arr);
		
		bubbleSort(arr); //Chama o método de ordenação
		
		System.out.println("\nArray ordenado com Bubble Sort: ");
		printArray(arr);
	}
	
	//Método que implementa a ordenação por Bubble Sort
	public static void bubbleSort(int[] arr) {
		int n = arr.length; //Pega o tamanho do array
		
		//Loop externo: controla o número de "passagens"
		//Em cada passagem, o maior elemento não ordenado flutua para a posição certa
		for (int i=0; i < n - 1; i++) {
			// Loop interno: percorre o array, comparando e trocando elementos adjacentes
            // A cada passagem 'i', os últimos 'i' elementos já estão no lugar certo
			for (int j=0; j < n - 1; j++) {
				// Compara o elemento atual com o próximo
				if (arr[j] > arr[j + 1]) {
					// Se o elemento atual for maior que o próximo, eles trocam de posição
					int temp = arr[j]; //Guarda o valor do elemento atual
					arr[j] = arr[j + 1]; //Move o próximo elemnto para a posição atual
					arr[j + 1] = temp; //Coloca o valor guardado na próxima posição
				}
			}
		}
	}
	
	//Método auxiliar para imprimir o array
	public static void printArray(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i] + " ");
		}
		System.out.println();
	}
}