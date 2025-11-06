// call()

// What
// - The .call() method is a predefined JavaScript function (inherited from Function.prototype) that is used to invoke a function immediately while explicitly specifying what the this keyword should refer to inside that function. It is a fundamental mechanism for controlling the execution context.

// Why
// - Function Borrowing: Enable an object to use a method that belongs to another object (e.g., using an array method on a plain object or the arguments object).
// - Constructor Chaining (Inheritance): Call a parent constructor function from inside a child constructor, ensuring the parent's properties are initialized on the child's new instance (Parent.call(this, ...)).
// - Override Default this: Manually set this to any object you choose, preventing the function from using the global object (window) or undefined (in strict mode) as its default context.

// How
// - You call the function using the .call() method on the function itself, passing the desired this object as the very first argument, followed by any other arguments the function normally requires, passed individually.

// Syntax
// functionName.call(thisObject, arg1, arg2, ...);

const object = {
  key: "value",
};

function ConstructorFunction(parameter) {
  return `${this.key} + ${parameter}`;
}

console.log(ConstructorFunction.call(object, "argument"));

// Example - 1
function setUsername(username) {
  this.username = username;
}

function CreateUser(username, email, password) {
  // Using .call() to set the context of this to the current instance
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const userOne = new CreateUser("testUser", "acb@xyz.com", "123");
console.log(userOne);

// Example - 2
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith",
};

// Call the fullName method of person, but set `this` to anotherPerson
console.log(person.fullName.call(anotherPerson));
