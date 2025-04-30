// `new` Operator (Special Keyword) (acts like an operator)

// What
// - Used for object creation.
// - It instructs the JavaScript engine to:
//      - Create a new empty object.
//      - Link the new object to the constructor function's prototype.
//      - Optionally, call the constructor function with any arguments provide

// Example
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Bob", 25);
console.log(person1.name); // Output: "Bob"
