// Array Iterate

const array = [1, 2, 3, 4, 5];

// For loop
for (let index1 = 0; index1 < array.length; index1++) {
  const element = array[index1];
  console.log(element);
}

// While loop
let index2 = 0;
while (index2 < array.length) {
  const ele = array[index2];
  console.log(ele);
  index2++;
}

// Do while loop
let index3 = 0;
do {
  const element = array[index3];
  console.log(element);
  index3++;
} while (index3 < array.length);

// For of loop (Recommended)
for (const element of array) {
  console.log(element);
}

// For in loop (Not Recommended)
for (const index4 in array) {
  const element = array[index4];
  console.log(element);
}

// forEach() method (Recommended)
array.forEach((element) => {
  console.log(element);
});
