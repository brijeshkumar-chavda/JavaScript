// this keyword with arrow function

// Note
// -> It doesn't have its own this context.
// -> It inherit from the surrounding code's parent scope where they are defined.

// this keyword with arrow function
// this -> strict & unstrict mode -> global scope -> arrow function -> global object
const arrowFunction = () => {
  console.log(this);
};
arrowFunction();

// this keyword with nested arrow function
// this -> strict & unstrict mode -> nested arrow function -> global object
const outerArrowFunction = () => {
  const innerArrowFunction = () => {
    console.log(this);
  };
  console.log(innerArrowFunction());
};
console.log(outerArrowFunction());

// this keyword with object method which is arrow function
// this -> strict & unstrict mode -> object method (method is arrow function) -> global object
const object1 = {
  key: "value",
  method: () => {
    return console.log(this.key);
  },
};
console.log(object1.method());

// Arrow function always refer to global object
// - If you are thinking that.If `this` keyword is always refer to global object for arrow function. Why can't we just rap the object around it. Then it will sure stop referring to global object and show the wrapper object.
const outerObject = {
  key: "value",
  innerObject: {
    arrowFunction: () => {
      console.log(this.key1);
    },
  },
};
console.log(outerObject.innerObject.arrowFunction());
// `this` just doesn't care. It won't show the key's -> value.
