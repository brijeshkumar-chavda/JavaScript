// Single Object Destructure

const myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  nestedObject: {
    key4: "value4",
    key5: "value5",
  },
};

// Manually object destructure
// const variable1 = object.key1;
// const variable2 = object.key2;
// const variable3 = object.key3;

// Easy object destructure
const {
  key1,
  key2,
  key3,
  key1: customNameForKey1, // Giving custom name using alias to the key
  nestedObject: { key4, key5 }, // Accessing nested object which is property
} = myObject;

console.log(key1);
console.log(key2);
console.log(key3);
console.log(customNameForKey1);

// Create new object from the existing object use spread operator
const { ...object1 } = myObject;
console.log(object1);
