// Object Cloning

// Note
// - When we clone the object and assign it to another object after that if we made any changes to original object it doesn't effect to the cloned

const object1 = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
};

// Clone object using spread operator
const object2 = { ...object1 };
console.log(object2);

// Q. What is Object.assign()?
// - It is use to copying object and assign to another object.
// - The Object.assign() method in JavaScript is used to copy the values of all enumerable properties from one or more source objects to a target object. It merges the properties of the source objects into the target object.

// SYNTAX
// Object.assign(targetObject, ...sourceObject);

const object3 = Object.assign({}, object1);
console.log(object3);
