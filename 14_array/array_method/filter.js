// filter()

// What
// - It create a new array with all elements that pass the test implemented by the provided function.

// How
// - It takes a callback function as a parameter. The callback function is called for each element in the array. If the callback function returns true, the element is included in the new array. If it returns false, the element is excluded.

// Note
// - It doesn't modify the original array.
// - It return new array.
// - It take callback function as a parameter
// - When you pass a callback function as a parameter in filter method make sure it has return boolean value because it return value base on condition statement.
// - If it doesn't find the required value it will return empty array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = array.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArray);
