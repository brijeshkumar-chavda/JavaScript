// Bind

// Q. What is Bind?
// - With the bind() method, an object can borrow a method from another object.
// - It works same as call but it will return function.

// NOTE
// - You need to store bind(); in variable and call in order to access it.

// SYNTAX
// dataType variableName = mainObject.method.bind(object, parameter)

function fun(para) {
  console.log(this.name);
  console.log(para);
}

const obj1 = {
  name: "Value1",
};

const obj2 = {
  name: "Value2",
};

const var1 = fun.bind(obj1, ["ele1", "ele2"]);
var1();

const var2 = fun.bind(obj2, "value");
var2();
