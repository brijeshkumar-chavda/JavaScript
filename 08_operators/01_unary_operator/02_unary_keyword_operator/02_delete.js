// Topic: delete Operator

// Q. What is `delete` Operator?
// -> Attempts to delete a property from an object.

// Note:
// -> Deleting properties can have unintended consequences, so use it cautiously.

// Example:
let object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

delete object.key3;
console.log("key3" in object); // Output: false (key3 property is deleted)

console.log(object);
