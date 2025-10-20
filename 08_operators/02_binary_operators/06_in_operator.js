// Topic: `in` Operator

// Q. What is `in` Operator?
// -> The `in` operator in JavaScript is used to check if a specified property exists in an object.
// -> It returns `true` if the property exists, and `false` otherwise.
// -> It checks both own properties and inherited properties through the prototype chain.
// -> It is commonly used in conditional statements to verify the presence of a property before accessing it, helping to avoid runtime errors.

// Example:
let object = { key1: "value1", key2: "value2" };

console.log("key1" in object); // Output: true (key1 is a direct property)
console.log("key3" in object); // Output: false (key3 is not a property)
