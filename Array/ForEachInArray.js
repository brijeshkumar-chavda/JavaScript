// For each method in array

const array = ["value1", "value2", "value3"];

// Create function which returns array's elements and index
function myFunction(element, index) {
  console.log(element);
  console.log(index);
}

for (let index = 0; index < array.length; index++) {
  myFunction(array[index], index);
}

// Using forEach() method will do same as above code
array.forEach(myFunction);

// forEach() take function as parameter
array.forEach(function (element) {
  console.log(element);
});

// Using arrow function
array.forEach((element) => {
  console.log(element);
});
