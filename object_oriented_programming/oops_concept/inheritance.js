// Inheritance

// Example
class User {
  constructor(username) {
    this.username = username;
  }

  printUsername() {
    console.log(`Username is ${this.username}`);
  }
}

// Backstory
// - Do you remember we are using the __proto__ (Prototype) to connect two object to share parent object properties and method for child object.
// - We are doing same thing here. Just form of class and extends keywords. It's syntactic sugar.
// - Like how we create object using the object literal, here we are using class to create object (Fancy name is "instance").
// - Now extending so called class to another class via `extends` keyword === __proto__

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
