// Nested Object

const myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  nestedObject: {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
};

// Accessing nested object
myObject.nestedObject.key1;
myObject.nestedObject["key1"];
myObject["nestedObject"]["key1"];
