// Getter & Setter

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Always add `return` keyword in get.
  get password() {
    return this._password.toUpperCase();
  }

  // - This set method is overriding the constructor's password.
  // - Don't add `return` keyword in set.
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const userOne = new User("abc@gmail.com", "abcd");
console.log(userOne.password);
