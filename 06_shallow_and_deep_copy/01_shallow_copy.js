// Topic: Shallow Copy

// Q. What is Shallow Copy?
// -> A Shallow Copy is a method of duplicating an array or object where a new top-level object is created, but any nested objects or arrays retain a reference to the original data structure.
// -> It copies the memory address pointers of the nested data, not the data itself.

// Q. Why do we need Shallow Copy?
// -> Immutability: To quickly create a new object reference so that comparison checks (like those used by React to detect state changes) pass, even if you only intend to change a top-level property.
// -> Performance: They are generally much faster and less resource-intensive than deep copies because they avoid the recursive processing of nested data structures.
// -> Flat Data: They are sufficient when the object or array contains only primitive values (numbers, strings, booleans) and no nested objects.

// Q. How to create a Shallow Copy in JavaScript?
// -> The shallow copy process depends on the type of data encountered:
// -> Primitive Values (Top-Level): The actual value is copied, making the copy independent of the original.
// -> Reference Values (Nested Objects/Arrays): Only the memory address (the reference) is copied. This means both the original object and the new copy point to the same nested object in memory.
// -> If you modify a nested property in the copy, the original object will also reflect that change because they are looking at the same underlying data.

// Note:
// -> A shallow copy means the object is only one level deep independent. Any changes made to properties directly on the first level of the copy will not affect the original, but changes to any nested objects will affect the original.

// Example:

const originalObject = {
  key1: "value1",
  nestedObject: {
    nestedKey1: "nestedValue1",
    nestedKey2: "nestedValue2",
  },
};

// Creating a shallow copy
const shallowCopy = { ...originalObject };

// Modifying a top-level property in the shallow copy
shallowCopy.key1 = "newValue1";

console.log("After modifying top-level property:");
console.log("Original Object:", originalObject); // key1 remains "value1"
console.log("Shallow Copy:", shallowCopy); // key1 is "newValue1"

// Modifying a nested property in the shallow copy
shallowCopy.nestedObject.nestedKey1 = "newNestedValue1";
console.log("\nAfter modifying nested property:");
console.log("Original Object:", originalObject); // nestedKey1 is now "newNestedValue1"
console.log("Shallow Copy:", shallowCopy); // nestedKey1 is "newNestedValue1"
