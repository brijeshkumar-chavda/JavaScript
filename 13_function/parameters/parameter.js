// Topic: Parameters

// Positional Parameters
// -> This is the most common way. You define a fixed list of parameters, and arguments are assigned to them based on their position.
// -> This parameters are required by default. If you don't provide an argument for a parameter, it will be undefined.
function function1(parameter1, parameter2) {
  return parameter1 + parameter2;
}

// Default Parameters
// -> You can assign default values to parameters. If an argument is not provided for that parameter, the default value is used.
function function2(parameter1, parameter2 = 5) {
  return parameter1 + parameter2;
}

// Rest Parameters
// -> You can use the rest parameter syntax to accept an indefinite number of arguments as an array.
function function3(...parameters) {
  return parameters;
}

// Destructured Parameters
// Object Destructuring
function function4({ key1, key2 }) {
  return key1 + key2;
}

// Array Destructuring
function function5([first, second]) {
  return first + second;
}
