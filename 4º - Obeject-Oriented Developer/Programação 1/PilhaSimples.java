class MyStack{
	private int maxSize; // The capacity of our tray holder (e.g., 3)
	private int[] stackArray; // The tray holder itself (an array)
	private int top; // Our "finger" that points to the top tray
	
	// The constructor sets up a new, empty stack
	public MyStack(int size){
		this.maxSize = size;
		this.stackArray = new int[maxSize];
		this.top = -1; // We point to -1 to show it's empty
	}
	
	public void push(int item){
		if(top >= maxSize -1){ // This is the check: "Is the top pointer at the last possible slot?"
		System.out.println("\nThe stack is full! Can't push " + item);
		return; // This means "stop the method here."
		}
		
		// This is the action if it's not full:
		top++; // 1. Move the finger up (e.g., from -1 to 0)
		stackArray[top] = item; // 2. Place the item in the array at the new 'top' index
		System.out.print("\nThat's the number you pushed onto the array: " + item);
	}
	
	public int pop(){
		if(top == -1){ // This is the check: "Is the top pointer at -1?"
			System.out.println("\nStack is already empty! Cannot pop.");
			return -1;
		}
		
		 // This is the action if it's not empty:
		int itemToReturn = stackArray[top]; // 1. Grab the item at the top
		top--; // 2. Move the finger down (e.g., from 2 to 1)
		System.out.print("\nThat's the number we popped: " + itemToReturn);
		return itemToReturn; // 3. Return the item we grabbed
		
	}
	
	public void peek(){
		if(top == -1){ // This is the check: "Is the top pointer at -1?"
			System.out.println("Stack is empty, nothing to show here.");
			return;
		}
		
		System.out.println("\nTop element is " + stackArray[top]);
	}
}

public class PilhaSimples{
	public static void main(String[] args){
		simularPilha();
	}
	
	// 1. Create the stack
	public static void simularPilha(){
		MyStack stack = new MyStack(3);
		// 2. Push the items
		stack.push(5);
		stack.push(8);
		stack.push(4);
		stack.push(7); //(This will correctly fail as the stack is full)
		// 3. Pop twice
		stack.pop();
		stack.pop();
		// 4. Peek at the top
		stack.peek();
		// 5. Pop twice more
		stack.pop();
		stack.pop(); //(This will correctly fail as the stack is empty)
		
		stack.peek();
	}
}