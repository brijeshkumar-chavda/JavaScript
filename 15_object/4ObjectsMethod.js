// Object Method

// Q. What is object method?
// - When have function inside the object it known as method.

const mainObject = {
  function1: function () {
    console.log("Hello, World!");
  },
};

// Accessing method
console.log(mainObject.function1());

// Adding method
mainObject.function2 = function () {
  console.log("Hello, World!");
};
