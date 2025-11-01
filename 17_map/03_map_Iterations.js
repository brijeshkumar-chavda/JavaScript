// Topic: Map Iterations

// forEach
const map1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"]
]);

map1.forEach(function (value, key, map) {
  console.log(key + ": " + value);
});

// Iterable

// Return values
for (let key of myMap) {
  console.log(key);
}

// Return keys and values
// It's return key and value in array form.
for (let [key, value] of myMap) {
  console.log([key, value]);
}

// Using object as key
const teachersDetail = {
  id: "101",
  name: "Math Teacher",
};
const extraTeachersDetail = new Map();
extraTeachersDetail.set(teachersDetail, {
  subject: "Math",
  department: "Math Department",
});
console.log(teachersDetail.id);
console.log(teachersDetail.name);
console.log(extraTeachersDetail.get(teachersDetail).department);
