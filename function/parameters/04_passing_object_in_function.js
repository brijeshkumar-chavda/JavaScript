// Topic: Passing Object in Function

const object = {
  key1: "value1",
  key2: "value2",
};

function function1(parameter) {
  return console.log(`Hey! I'm the ${parameter.key1}!`);
}

// Passing an object reference as a argument in the function.
function1(object);

// Passing literally an object as a argument in the function.
function1({
  key1: "value1",
  key2: "value2",
});
