// Object.freeze()

const myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

Object.freeze(myObject);

myObject["key1"] = "I am the changed value for key1";
console.log(myObject);
