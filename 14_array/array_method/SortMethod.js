// Sort Method

// Q.What is sort(); method?
// - It's use to sort element in array.

// NOTE
// - It takes call back function as parameter.
// - If the array has element in numbers form and you use sort method on array. It will treat numbers as string and sort them A to Z. Reason for doing this because of ASCII. Every characters has their own ASCII value which is number.

// SYNTAX
const arr = [1, 5, 3, 4, 2];

// Assenting
arr.sort((a, b) => a - b);
console.log(arr);

// Descending
arr.sort((a, b) => b - a);
console.log(arr);

// Example:
const products = [
  {
    id: 1,
    name: "Phone",
    price: 12000,
  },
  {
    id: 2,
    name: "Tablet",
    price: 60000,
  },
  {
    id: 3,
    name: "Laptop",
    price: 50000,
  },
];

products.sort((a, b) => a.price - b.price);
console.log(products);
