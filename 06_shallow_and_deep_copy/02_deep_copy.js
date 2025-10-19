// Topic: Deep Copy

// Q. What is Deep Copy?
// -> A Deep Copy is a method of duplicating an object or array where a completely new object is created, and all nested objects and arrays within it are also copied recursively.
// -> This process ensures that the new copy is entirely independent of the original object, with no shared memory references at any level of the structure.

// Q. Why do we need Deep Copy?
// -> Deep copies are essential for:
// -> Guaranteed Immutability: When working with complex state (especially in frameworks like React/Redux), a deep copy guarantees that modifying any part of the copied data will never cause unintended side effects in the original data structure.
// -> Data Integrity: They prevent subtle bugs that arise from two different parts of your program unexpectedly sharing and modifying the same piece of nested data.
// -> Complex Structures: They are necessary for any object or array that contains other objects or arrays inside it.

// Q. How to create a Deep Copy in JavaScript?
// -> The deep copy process involves recursively traversing the entire source object.
// -> A new object/array is created.

// For every property:
// -> If the value is a primitive (number, string, etc.), the value is copied directly.
// -> If the value is a reference type (another object or array), the deep copy process is called again on that nested structure to create a brand new copy of it, and only the reference to this new nested copy is assigned to the new parent object.
// -> This process continues until all levels of the object hierarchy have been duplicated.

// Note:
// -> Always prefer structuredClone() for deep copying in modern JavaScript environments unless you have specific compatibility constraints. Avoid JSON.parse(JSON.stringify()) if your object contains complex data types or might have circular references.

// Example:

const originalObject = {
  key: "value",
  nestedObject: { nestedKey: "nested value" }, // <-- Nested object
};

// Create a deep copy using the modern structuredClone API
const deepCopy = structuredClone(originalObject);

// Change a NESTED property in the copy
deepCopy.nestedObject.nestedKey = "new nested value";

// The original object's nested property is completely untouched.
console.log(originalObject.nestedObject.nestedKey); // Output: 'nested value'
console.log(deepCopy.nestedObject.nestedKey); // Output: 'new nested value'
