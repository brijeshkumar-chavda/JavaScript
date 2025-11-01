// `instanceOf` Operator

// Q. What is the `instanceOf` Operator?
// - To check the every object is instance of the `new Object()` use this operator called `instanceOf` it will return true if the object that you create it is instance of the `new Object()`.

// SYNTAX
// createdObjectName instanceOf BaseObjectName

const object = {
  key1: "value1",
  key2: "value2",
};

console.log(object instanceof Object); // => true
