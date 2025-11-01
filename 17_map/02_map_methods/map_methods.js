// Topic: Map Methods

const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

// set();
console.log(map.set("key4", "value4"));

// get();
console.log(map.get("key1"));

// delete();
console.log(map.delete("key4"));

// has();
console.log(map.has("key4"));

// size
console.log(map.size);

// forEach();
console.log(map.forEach((value, key, map) => console.log("${key} : ${value}")));
