// How symbol work with the object?

const mySymbol = Symbol("I am just the optional description not the value");

const myObject = {
  [mySymbol]: "I am the value for the mySymbol",
};

console.log(typeof mySymbol);
console.log(typeof myObject[mySymbol]);