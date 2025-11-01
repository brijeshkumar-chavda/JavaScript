// Getter & Setter

// Q. What is Getter and Setter?
// - In JavaScript, getters and setters are special methods that allow you to define the behavior of accessing and modifying object properties. They provide a way to control and encapsulate the access to object properties, enabling you to add validation, perform calculations, or execute additional logic when reading or writing values.

// Using getter and setter in object
const object = {
  key: "value",

  // Accessing object property
  get getKey() {
    console.log(this.key);
  },

  // Updating object property
  set setKey(newValue) {
    this.key = newValue;
  },
};

console.log(object.getKey);
object.setKey = "new value";
console.log(object.getKey);

// Using getter and setter in class

class MyClass {
  constructor(parameter1, parameter2) {
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
  }

  get getParameter1() {
    console.log(this.parameter1);
  }

  set setParameter1(value) {
    this.parameter1 = value;
  }
}

const object1 = new MyClass("value1", "value2");
console.log(object1);

object1.setParameter1 = "new value 1"
console.log(object1.getParameter1);
