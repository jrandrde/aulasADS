public class QuickSort{
	public static void main(String[] args){
		int[] arr = {356, -296, 10, -89, 0, 64, 91, 2, 10};
		
		System.out.println("Array original: ");
		printArray(arr);
		
		quicksort(arr, 0, arr.length -1);
		
		System.out.println("\n Array ordenado com quick sort: ");
		printArray(arr);
	}
	
	public static void quicksort(int[] arr, int low, int high){
		if(low < high){
			int pi = partition(arr, low, high);
			
			quicksort(arr, low, pi -1);
			quicksort(arr, pi +1, high);
		}
	}
	
	public static int partition(int[] arr, int low, int high){
		int pivot = arr[high];
		
		int i = (low - 1);
		
		for(int j = low; j < high; j++){
			if(arr[j] <= pivot){
				i++;
				swap(arr, i, j);
			}
		}
		
		swap(arr, i + 1, high);
		return i + 1;
	}
	
	public static void swap(int[] arr, int i, int j){
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	
		public static void printArray(int[] arr){
		for(int i = 0; i < arr.length ; i++){
			System.out.println(arr[i] + " ");
		}
		System.out.println();
	}
}