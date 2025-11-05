// Getter & Setter

// What
// - Getter & Setter are the method. Which are used to get and set the value of a property.

// How
// - Before setting up the value you can validate the value for some cases using thr setter method.
// - Before getting the value you can computation the value for some cases using thr getter method.

// Syntax

class Class1 {
  constructor(parameter1) {
    this.variable1 = parameter1;
  }

  // Always add `return` keyword in get.
  get variable1() {
    return this.variable1.toUpperCase();
  }

  // - This set method is overriding the constructor's parameter1.
  // - First it will validate the argument and then set the value.
  // - Don't add `return` keyword in set.
  set variable1(value) {
    if (!value) {
      console.warn("Please pass the value");
      return;
    }
    this.variable1 = value;
  }
}

const instance1 = new Class1("abc");
console.log(instance1.variable1);

// Example
// Normal Property
// - In this common pattern, the property being accessed is stored in a convention-based private field prefixed with an underscore (e.g., _price). This is not strictly private but is a signal to other developers that they should use the getter/setter methods.

class Product {
  constructor(name, price) {
    // 1. Store the value in a 'hidden' field (convention-based private)
    this._name = name;
    this._price = price;
  }

  // GETTER: Run when you READ the property (e.g., product.price)
  get price() {
    console.log("Getter: Reading price...");
    // Return the value from the internal field
    return this._price;
  }

  // SETTER: Run when you ASSIGN the property (e.g., product.price = 150)
  set price(newPrice) {
    // 2. Add validation or logic here
    if (newPrice < 0) {
      console.error("Setter: Price cannot be negative!");
      return; // Stop execution
    }
    console.log(`Setter: Setting price to ${newPrice}`);
    // Update the internal field
    this._price = newPrice;
  }
}

// --- Example Usage ---
const item = new Product("Laptop Bag", 99.99);

// Get (runs the getter method)
console.log(`Initial Price: $${item.price}`);

// Set (runs the setter method)
item.price = 125.5;
console.log(`New Price: $${item.price}`);

// Set with validation trigger
item.price = -10; // Console logs the error message

// Private Property (# Symbol)
// - This is the modern way to define a truly private class field in JavaScript, starting with the hash symbol (#). The getter and setter methods are the only way to access this field from outside the class.

class Inventory {
  // 1. Define the truly private field using the hash symbol
  #stockLevel;

  constructor(initialStock) {
    // Initialize the private field
    this.#stockLevel = initialStock;
  }

  // GETTER: Public interface to READ the private property
  get stock() {
    console.log("Getter: Checking private stock level...");
    return this.#stockLevel;
  }

  // SETTER: Public interface to WRITE to the private property
  set stock(amount) {
    // 2. Add strict validation and control over the private field
    if (typeof amount !== "number" || amount < 0) {
      console.error("Setter: Stock must be a non-negative number!");
      return;
    }
    // Update the private field
    this.#stockLevel = amount;
    console.log(`Setter: Stock updated to ${this.#stockLevel}`);
  }
}

// --- Example Usage ---
const product = new Inventory(50);

// Get (runs the getter)
console.log(`Current Stock: ${product.stock}`); // Current Stock: 50

// Set (runs the setter)
product.stock = 45; // Console logs: Setter: Stock updated to 45

// Attempt to access the private field directly (will cause a Syntax Error outside the class)
// console.log(product.#stockLevel); // This line would fail

// Set with validation trigger
product.stock = "ten"; // Console logs: Setter: Stock must be a non-negative number!
