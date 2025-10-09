// Topic: Symbol

// Q. What is Symbol?
// -> In JavaScript, symbols are unique and immutable primitive values that represent unique tokens.

// Q. Why use Symbol?
// -> Symbols are used to create unique identifiers, which can be used as property keys for object properties. They help prevent naming collisions and enable the creation of private object members.

// Q. How to use Symbol?
// -> Symbols are created using the Symbol() function, which returns a unique symbol value.
// -> Symbols can be used as property keys, function names, or any other identifier in your program.
// -> Symbols are compared using strict equality (===), which ensures that only identical symbol values are considered equal.

// Note:
// -> Symbol doesn't use `new` keyword. Because it's an primitive datatype.
// -> Primitive datatype doesn't required the `new` keyword. Because they are basic, immutable values.
// -> Only Object, Array and Function need it because The new keyword is used to create instances.

// Syntax:
// -> Symbols are created using the Symbol() construction, optionally with a description as an argument. Each symbol value returned by Symbol() is guaranteed to be unique.
const symbolName = Symbol("description argument");

// Example:
const car = {
  make: "BMW",
  model: "M3 GTR",
  year: 2005,
};

// Create a unique symbol for the identifier
const carId = Symbol("Blacklist No.1");

// Add the identifier to the car using the symbol
car[carId] = "Legendary Car";

// Access the symbol property
console.log(car[carId]);

// Log the car object
console.log(car);

// - The symbol property will not show up in a normal object log (it’s non-enumerable).
// - To see symbol properties, use Object.getOwnPropertySymbols(car).
// - If you run the in browser you wan't able to see the key which is created using the symbol. But if you run it using the nodejs you and clearly see the hidden key which are created using the symbol.

console.log(Object.getOwnPropertySymbols(car));
