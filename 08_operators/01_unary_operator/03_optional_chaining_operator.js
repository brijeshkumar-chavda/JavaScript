// Topic: Optional Chaining Operator

// Q. What is optional chaining operator?
// -> The optional chaining operator (?.), introduced in ECMAScript 2020 (ES2020), is a safe and concise way to access properties or call methods of nested objects and normal objects in JavaScript. It helps prevent errors that might occur when dealing with potentially undefined or null values in the chain.

// Q. Why is optional chaining operator needed?
// -> JavaScript allows accessing properties and calling methods on objects. However, if any object in the chain is null or undefined, trying to access its properties or methods will result in a runtime error. Optional chaining provides a safer alternative by gracefully handling these scenarios.

// Q. How does optional chaining work?
// -> The optional chaining operator works by attempting to access the specified property or call the method on the object. If the object itself is null or undefined, the expression short-circuits and evaluates to undefined. This prevents errors and allows you to write cleaner and more robust code.

// Note:
// -> Optional chaining only checks for null or undefined values. It doesn't handle other falsy values like 0, "", or false.
// -> Optional chaining can be chained for deeper nested objects.
// -> In ES2022 and later, optional chaining can also be used with array elements using bracket notation (object?.[index]) to access elements safely.

// Syntax:
// -> object?.property - Accesses the property on the object if it exists, otherwise returns undefined.
// -> object?.method() - Calls the method on the object if it exists, otherwise returns undefined.

// Example:
const user = {
  name: "Alice",
  profile: {
    greet() {
      console.log("Hello from", this.name);
    },
  },
};

// Checking property from the object
// Traditional approach (might cause errors):
let name = user.profile.name; // Safe if profile exists, throws error otherwise

// Using optional chaining (safe approach):
let safeName = user?.profile?.name; // Evaluates to "Alice" or undefined

// Checking method from the object
// Traditional approach (might cause errors):
let greeting;
if (user && user.profile) {
  greeting = user.profile.greet(); // Safe if profile exists, throws error otherwise
}

// Using optional chaining (safe approach):
let safeGreeting = user?.profile?.greet(); // Safe, won't call greet() if user or profile is missing


