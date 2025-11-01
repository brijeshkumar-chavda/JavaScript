// Nested Destructure

// NOTE
// - When objects are inside the array and you are accessing different name and values from the different object. It will give you the name and value according the index which are object stored. Because all those object inside the array work as a element of the array.

// Objects inside the array.
const array = [
  {
    name1: "value1",
    name2: "value2",
    name3: "value3",
  },
  {
    name4: "value4",
    name5: "value5",
    name6: "value6",
  },
];

// Taking objects from the array and storing in variables and each variable has one object
const [var1, var2] = array;
console.log(var1);
console.log(var2);

// Accessing specific name & value from the different objects.
const [{ name1 }, { name4 }] = array;
console.log(name1);
console.log(name4);

// Accessing specific name & value from the objects and assigning different variable name
const [{ name1: var3 }, { name4: var4 }] = array;
console.log(var3);
console.log(var4);
