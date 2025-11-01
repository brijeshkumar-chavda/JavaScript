// Spread Operator On Object

// NOTE
// - When both objects has same name but values are different and you combine them together to make one object.At that time even if the names are same but value will be consider(taken) from the only last object. Because even though both have same name but latest update value will be considered from the last object.

const object1 = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
  sameName: "sameValue1",
};

const object2 = {
  name4: "value4",
  name5: "value5",
  name6: "value6",
  sameName: "sameValue2",
};

// Add both objects into the new object
const object3 = { ...object1, ...object2 };
console.log(object3);

// Add both objects into the one new object and adding name : value pair
const object4 = { ...object1, ...object2, name7: "value7" };

// When array is added into the object at that time array index will be name and element will be value
const arr = [1, 2, 3];
const object5 = {
  ...arr,
};
console.log(object5);
