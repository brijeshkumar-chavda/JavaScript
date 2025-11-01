// Why don't use `this` and arrow function combination with method and constructor

// Method
// - When you define a method in an object, you typically want this to refer to the object itself. Using a regular function ensures that this refers to the object.

// Example With Regular Function + this
const object = {
  key: "value",
  regularFunction: function () {
    console.log(this); // this refers to object
    console.log(this.key); // this.key refers to object.key
  },
};
object.regularFunction(); // Outputs: "value"

// Example With Arrow Function + this
const object1 = {
  key: "value",
  arrowFunction: () => {
    console.log(this); // this refers to the surrounding context, not object1
    console.log(this.key); // undefined, because this is not object1
  },
};
object1.arrowFunction(); // Outputs: global object (or undefined in strict mode)

// Constructors
// - When you create a new instance of an object using a constructor, you want this to refer to the new instance being created. Arrow functions would not work properly because they don't have their own this.

// Example With Regular Function + this
// TODO: please complete the constructor video from the @chaiaurcode playlist then comeback for refactor this code.
function Constructor(parameter) {
  this.name = parameter;
  this.sayName = function () {
    console.log(this.name); // this refers to the new instance
  };
}
const person = new Person("Alice");
person.sayName(); // Outputs: Alice

// Example With Arrow Function + this
function Constructor(name) {
  this.name = name;
  this.sayName = () => {
    console.log(this.name); // this refers to the surrounding context, not the new instance
  };
}
const person1 = new Constructor("Alice");
person.sayName(); // Outputs: undefined (or a different value if this.name exists in the outer context)

// Summary
// - Arrow Functions: Inherit this from the surrounding context, which can lead to unexpected behavior inside methods and constructors.
// - Regular Functions: Have their own this which is set based on how the function is called. This behavior is typically what you want in methods and constructors.

// Conclusion
// - Avoid using arrow functions in methods and constructors because they do not bind their own this. This can lead to this referring to an unexpected context, causing bugs in your code. Use regular functions instead to ensure this behaves as intended within methods and constructors.
