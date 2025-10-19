// Topic: void Operator

// Q. What is `void` Operator?
// -> Evaluates an expression but discards the result, returning undefined.

// Note:
// -> Even if you use the void to discard a value, but the console.log() will still log the value.
// -> It wasn't affected by the void operator. void only discards the value in the expression itself.

// Example:
function myFunction() {
  console.log("Hello World");
  void 0; // This line explicitly returns undefined using void
}
console.log(myFunction());
