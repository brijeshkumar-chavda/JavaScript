// Context/ Current Context

// What
// - When you are talking with your friend about some event that is host on MONDAY.
// - But you need to also clearly mention that which MONDAY are you talking about it was last week, current week or upcoming week.
// - This is the same for `this` keyword. It help to find the current context.
// - Suppose you have two object and both of them have same method. If you call the method how it will going to check that which object's method are you trying to access.
// - By using `this` keyword you are telling that which MONDAY are you talking about. I mean which object you are trying to access.

const user = {
  username: "test user",
  userId: "123",

  getUserName: function () {
    console.log(username); // It doesn't know which user are you talking about.
    console.log(this.username); // By using this it will refer to current object.
    // user.getUserName === this.username
  },
};
