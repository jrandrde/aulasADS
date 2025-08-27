public class VendingMachine {
	public static void main (String[] args) {
		String productCode = "A1";
		String productName = "";
		double moneyInserted = 2.5;
		double productPrice = 0.0;
		
		switch(productCode){
			case "A1":
			productPrice = 1.5;
			productName = "Chips";
			break;
			
			case "B1":
			productPrice = 2.0;
			productName = "Soda";
			break;
			
			case "C1":
			productPrice = 1.25;
			productName = "Candy";
			break;
		}
		
		if(productName.equals("")) {
			System.out.println("Sorry, we don't have that product.");
		} else if (moneyInserted >= productPrice) {
			double change = moneyInserted - productPrice;
			System.out.println("Vending " + productName + ". Your change is $" + change);
		} else {
			double dif = productPrice - moneyInserted;
			System.out.println("Your short $" + dif + " buddy.");
		}
	}
}

