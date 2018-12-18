

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system  = system;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "and the system is" + this.system + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "IOS");
iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone ("Samsung", 900, "black", "android");
SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone ("OnePlus", 2000, "pink", "android");
nePlusOne.printInfo();


