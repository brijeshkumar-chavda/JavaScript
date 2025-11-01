// entries(); method

// Q. What is entries()?
// - It returns a new iterator object that contains an array of [key, value] pairs for each element in the Map, in insertion order. You can use this iterator to iterate over the entries of a Map.

const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

const iterator = map.entries(); // Return an iterator object

for (const entry of iterator) {
  const [key, value] = entry;
  console.log(`Key: ${key}, Value: ${value}`);
}
