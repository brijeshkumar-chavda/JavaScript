// Object Computed Properties

// Q. What is object computed properties?
// - In JavaScript, computed properties, also known as computed property names or computed object property names, allow you to dynamically define property names of an object using an expression inside square brackets ([]). The expression is evaluated at runtime, and its result is used as the property name.

// Variable which are going to add as name : value in object.
const name1 = "name1";
const name2 = "name2";
const name3 = "name3";
const value1 = "Value1";
const value2 = "Value2";
const value3 = "Value3";

// Directly put variable name inside the object
const mainObject = {
  [name1]: value1,
  [name2]: value2,
  [name3]: value3,
};
console.log(mainObject);

// Manually assignee name to object and then assign value
const object1 = {};
object1[name1] = value1;
object1[name2] = value2;
object1[name3] = value3;
console.log(object1);
