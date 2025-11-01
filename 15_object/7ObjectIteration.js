// Object Iteration

const object = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
};

// For in loop (Recommended)
for (const name in object) {
  console.log(name); // Print the names
  console.log(object[name]); // Print the values
  console.log(name, ":", object[name]); // Print the names : values both
}
