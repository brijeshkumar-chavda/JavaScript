// Apply

// Q. What is apply?
// - apply() is same as call().
// - The call() method takes arguments separately.
// - The apply() method takes arguments as an array.

// NOTE
// - Internally apply is using call.

// SYNTAX
// mainObject.method.call(object, parameter)

function fun(para1, para2) {
  console.log(this.name);
  console.log(para1);
  console.log(para2);
}

const obj1 = {
  name: "Value1",
};

const obj2 = {
  name: "Value1",
};

fun.apply(obj1, ["ele1", "ele2"]);
fun.apply(obj2, ["ele1", "ele2"]);
