// Spread syntax with object

const myObject1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const myObject2 = {
  key4: "value1",
  key5: "value2",
  key6: "value3",
};

const mergeObject = { ...myObject1, ...myObject2 };
console.log(mergeObject);
