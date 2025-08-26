public class DaysInAMonth {
	public static void main (String[] args){
		int month = 13;
		
		switch(month){
			case 1,3,5,7,8,10,12: 
			System.out.println("This month has 31 days"); break;
			
			case 4, 6, 9, 11:
			System.out.println("This month has 30 days"); break;
			
			case 2:
			System.out.println("This month has 28 days"); break;
			
			default: System.out.println("We don't have this month in our calendar, sorry.");
		}
	}
	
}