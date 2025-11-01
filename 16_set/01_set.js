// Topic: Set

// Q.What is set?
// -> Set is look like array but it's not an array. It's an array like object. Which can store unique value but no duplicate values are allowed as we do with array. It's iterable.

// Note:
// -> Set accept the element in array format like this [element1, element2, ...] while creating new set using Set() constructor.
// -> But when outputting the set, it will not show in array format. It will show in set format like this Set{element1, element2, ...}.

// Positive
// -> Insertion order is maintained.
// -> Different types of data can be stored.

// Negative
// -> No duplicate values are allowed.
// -> Element can't be access by using index.

// Syntax:
// const setName = new Set();
// const setName = new Set({element1, element2, ...});

// Example:

// Creating set using Set() constructor
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1);
