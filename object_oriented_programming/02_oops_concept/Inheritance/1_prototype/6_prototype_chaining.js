// Prototype Chaining

// Creating object using object literal
const object = {
  key1: "value1",
  key2: "value2",
};

// NOTE
// - In background it using `new Object()` constructor to creating new object.
// - Every object that we creating in JavaScript is directly or indirectly in the instance of the `new Object()` (object constructor).

// const object = {
//   key1: "value1",
//   key2: "value2",
// };

// SAME AS

// const object = new Object();
// object.key1 = "value1";
// object.key2 = "value2";
