// Super()

// What
// - The super keyword is used inside a class to reference methods and properties of the parent class (or superclass) of the current object.
// - super(): Used as a function call within a subclass constructor to call the parent class's constructor.
// - super.methodName: Used to call a method or access a property defined on the parent class's prototype.

// How
// - In the Constructor: If a subclass has a constructor, it must call super() before using this. This executes the parent constructor, ensuring the necessary inherited properties are created on the instance.
// - In a Method: Using super.methodName(...) allows the subclass method to invoke the implementation of the method from the parent class, typically to augment or wrap that original behavior.

// Example
class User {
  constructor(username) {
    this.username = username;
  }

  printUsername() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // - The `super` keyword in JavaScript is crucial for working with class inheritance. It allows subclasses to initialize and utilize parent class properties and methods,
    super(username);

    this.email = email;
    this.password = password;
  }

  addCourse() {
    return console.log(`Course Instructor: ${this.username}`);
  }
}

const sam = new Teacher("samwhite", "samwhite@gmail.com", "123");
sam.addCourse();

console.log(sam === Teacher);
console.log(sam === User);

console.log(sam instanceof Teacher);
console.log(sam instanceof User);
