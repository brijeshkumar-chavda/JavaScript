// Reduce()

// What
// - Before understanding the "reduce method" you need to understand what "reduce" word means. It means that something that can be shorten or smaller.

// Q.Why use reduce method?
// - When you use reduce method on array it will give you back the sum of the all the elements inside the array

// Q.How to use reduce method?
//  It's take callback function as parameter and default value

// SYNTAX
// array.reduce(() => {}, defaultValue);

const array = [1, 2, 3, 4, 5];
const total = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total);

// EXAMPLE
const cart = [
  {
    productID: 1,
    productName: "Phone",
    price: 10000,
  },
  {
    productID: 2,
    productName: "Tablet",
    price: 15000,
  },
  {
    productID: 1,
    productName: "Laptop",
    price: 30000,
  },
];

const totalPrice = cart.reduce(
  (totalPrice, item) => totalPrice + item.price,
  0
);
console.log(totalPrice);

/*
  # NOTE:
  -> If you pass default value 100 it will return 115. Because it taking default value 100 and adding the sum of all the elements and returning the total.
  -> Don't confuse the reduce method with fibonacci series. They both are different. In fibonacci series it pick the last to digits and give back the sum. But in reduce method it actually pick the next element.

  Fibonacci series
  1 + 1 = 1
  1 + 2 = 3
  2 + 3 = 5

  Reduce method
  1 + 2 = 3
  3 + 3 = 6
  6 + 4 = 10
*/
