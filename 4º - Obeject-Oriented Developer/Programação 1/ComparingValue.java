class MyStack {
	private int maxSize;
	private int[] stackArray;
	private int top;
	
	public MyStack (int size){
		this.maxSize = size;
		this.stackArray = new int[maxSize];
		this.top = -1;
	}
	
	public void push(int item){
		if(top >= maxSize -1){
			System.out.println("Stack is full! Can't push item " + item);
			return;
		}
		
		top++;
		stackArray[top] = item;
	}
	
	public int pop(){
		if(top == -1){
			System.out.println("\nStack is empty! Nothing to pop.");
			return -1;
		}
		
		int itemToReturn = stackArray[top];
		top--;
		return itemToReturn;
	}
	
	public void peek(){
		if(top == -1){
			System.out.println("\nStack is empty! Can't show anything");
			return;
		}
		
		System.out.println("\nItem at top of the stack: " + stackArray[top]);
	}
	
	public boolean isEmpty(){
		return top == -1; 
	}
	
	public void displayArray(){
		for(int i = 0; i <= top; i++){
			System.out.println(stackArray[i] + "");
		}
	}
}

public class ComparingValue{
	public static void main(String[] args){
		MyStack myStack = new MyStack(5);
		
		myStack.push(10);
		myStack.push(20);
		myStack.push(30);
		myStack.push(40);
		myStack.push(50);
		
		int valueToFind = 30;
		
		boolean result = findValue(myStack, valueToFind);
		
		System.out.println("\nWas the value " + valueToFind + " found in the stack? " + result);
	}
	
	public static boolean findValue(MyStack stack, int valueToFind){
		MyStack tempStack = new MyStack(5);
		boolean found = false;
	
		while(!stack.isEmpty()){
			int tempItem = stack.pop();
			if(tempItem == valueToFind){
			found = true;
			}
			tempStack.push(tempItem);
		}
		System.out.println("\nTemporary Array, in reversed order: ");
		tempStack.displayArray();
		
		while(!tempStack.isEmpty()){
			int tempItem = tempStack.pop();
			stack.push(tempItem);
		}
		System.out.println("\nOriginal array in the right order: ");
		stack.displayArray();
		return found;
	}
	
}

