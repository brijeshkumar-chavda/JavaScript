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
