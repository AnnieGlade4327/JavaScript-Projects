//assigning the function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//assigning objects to keywords
var Jack = new Vehicle("Dodge", "Viper,", 2020, "Red ");
var Emily = new Vehicle("Jeep", "Trail Hawk,", 2019, "White and Black ");
var Erik = new Vehicle("Ford", "Pinto,", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//assigning/creating a function
function Coffee(Drink, Size, Milk, Temp) {
    this.Coffee_Drink = Drink;
    this.Coffee_Size = Size;
    this.Coffee_Milk = Milk;
    this.Coffee_Temp = Temp;
}

var customer = new Coffee("Mocha", 12 + "oz", "Whole", "Iced");
//running the function and utilizing "new and this" keywords
function newFunction () {
    document.getElementById("New_and_This").innerHTML =
    "Customer order: " + customer.Coffee_Drink + customer.Coffee_Size + customer.Coffee_Milk + customer.Coffee_Temp;
}


