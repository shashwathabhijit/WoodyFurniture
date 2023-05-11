// Define a variable for the total price of the furniture
var totalPrice = 0;

// Create an object constructor function for the furniture
function Furniture(name, type, price) {
  this.name = name;
  this.type = type;
  this.price = price;
}

// Create some instances of the Furniture object
var chair = new Furniture("Wooden Chair", "Chair", 50);
var table = new Furniture("Wooden Table", "Table", 150);
var bookshelf = new Furniture("Wooden Bookshelf", "Bookshelf", 100);

// Define a function to calculate the total price of the furniture
function calculateTotalPrice(furnitureArray) {
  furnitureArray.forEach(function(furniture) {
    totalPrice += furniture.price;
  });
  return totalPrice;
}

// Call the calculateTotalPrice function with an array of the furniture objects
calculateTotalPrice([chair, table, bookshelf]);

// Output the total price to the console
console.log("The total price of the furniture is $" + totalPrice + ".");
