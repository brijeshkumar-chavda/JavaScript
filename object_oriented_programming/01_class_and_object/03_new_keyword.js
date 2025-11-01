// `new` Keyword

// Object === Instance

// What
// - In JavaScript, the new keyword is used to create a new object instance that we want to create.

// Why
// - If you create a new instance without the `new` keyword it will update the value of previously created instance.

// How
// - When you create a new instance using the new keyword it will create a new empty object.
// - It sets the prototype of this new object to the constructor function's prototype.
// - It binds the this keyword inside the constructor function to the new object.
// - It executes the constructor function, allowing it to initialize properties and methods on the new object.
// - Finally, it returns the newly created object unless the constructor function explicitly returns a different object.

// Example
function User(username, userID, userEmail) {
  this.username = username;
  this.userID = userID;
  this.userEmail = userEmail;

  this.getUsername = function () {
    console.log(this.username);
  };
  return this;
}

// Try this without `new` keyword
const userOne = new User("user1", "123", "abc@xyz.com");
const userTwo = new User("user2", "456", "efg@xyz.com");

// userTwo will overwrite the values of userOne. To avoid this and create separate new instance we need to use `new` keyword.
console.log(userOne);
console.log(userTwo);
