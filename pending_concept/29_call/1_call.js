// .call()

// What
// - The .call() method in JavaScript is a special method available on all functions. It allows you to call a function and specify what this should refer to inside that function.

// Why
// - In JavaScript, the value of this inside a function depends on how the function is called.
// - Sometimes, you might want to call a function in a way that this refers to a specific object
// - The.call() method gives you that control.

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
