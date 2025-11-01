// Topic: for loop

// Q. What is for loop?
// -> A for loop in JavaScript is a programming construct that allows you to repeat a set of instructions a certain number of times. It's great for automating tasks that need to be done repeatedly.

// Q. Why is for loop used?
// -> Imagine you have a task you need to do over and over again. Instead of writing the same code multiple times, a for loop helps you perform that task a specific number of times, making your code more efficient and easier to manage.

// Q. How is a for loop structured?
// -> Initialization: You start by defining a variable and giving it an initial value. This variable will keep track of the loop's progress.
// -> Condition: You specify a condition that, as long as it's true, the loop will continue to run. This condition is checked before every loop iteration.
// -> Iteration: After each iteration of the loop, the loop variable is updated according to a certain pattern.
// -> Instructions: Inside the loop, you put the instructions you want to repeat.
// -> Update: After each iteration, the loop variable is updated following the specified pattern. The loop continues to run as long as the condition is true.

// Note:
// -> Make sure that your loop's condition becomes false at some point; otherwise, your loop will run indefinitely, causing your program to crash.

// Syntax:
// for (initialization; condition; iteration) {
//  Instructions to repeat
// }

// Example:

// Simple for loop
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

for (let index = 0; index <= 10; index++) {
  if (index === 5) {
    console.log("This is number 5");
  }
  console.log(index);
}

// Nested for loop
for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop: ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// For loop for array
const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// Break
for (let index = 0; index <= 10; index++) {
  if (index === 5) {
    console.log("Number 5 detected");
    break;
  }
  console.log(index);
}

// Continue
for (let index = 0; index <= 10; index++) {
  if (index === 5) {
    console.log("Number 5 detected");
    continue;
  }
  console.log(index);
}
