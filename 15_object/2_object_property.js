// Object Property

// What
// - A JavaScript object is a collection of unordered properties.

// Q. What is property?
// - `key : "value"` pair which stored in object known as a property.

const myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Accessing property
myObject.key1;
myObject["key1"];

// Adding new property
myObject.key4 = "value4";

// Deleting property
delete myObject.key1;
delete myObject["key1"];

// Note
// - The `delete` you see. It's an keyword & unary operator in javascript.
// - It is use to delete the properties of the object.
