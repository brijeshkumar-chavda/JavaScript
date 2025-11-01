// Accessing object properties using "." dot notation
const object1 = {
  key1: "value1",
};
console.log(object1.key1);

// Accessing object properties using "[]" square bracket notation
const object2 = {
  key2: "value2",
};

console.log(object2["key2"]);

// Set variable as key for object
const variable = "key3";

const object3 = {
  [variable]: "value3",
  key5: "",
  key6: "value6",
};
console.log(object3);
console.log(object3.key3);

// Dynamically updating object key
function updatingObject(key, value) {
  object3[key] = value;
}

// Adding key
updatingObject("key4", "value4");
console.log(object3);

// Updating existing key in the object
updatingObject("key5", "value5");
console.log(object3);

// Changing existing key's value in the object
updatingObject("key6", "updated value6");
console.log(object3);
