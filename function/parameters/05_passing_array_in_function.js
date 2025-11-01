// Topic: Passing array in Function

const array = [0, 1, 2, 3, 4, 5];

function function1(array) {
  return array[1];
}

// Passing an array reference as a argument in the function.
console.log(function1(array));

// Passing literally an array as a argument in the function.
console.log(function1([0, 1, 2, 3, 4, 5]));
