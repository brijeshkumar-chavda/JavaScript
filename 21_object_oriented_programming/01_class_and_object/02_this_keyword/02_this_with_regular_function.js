// this keyword behavior with the regular function

// this keyword with regular function
// this -> strict mode -> regular function -> undefined
// this -> Unstrict Mode -> regular function -> global object
function function1() {
  return console.log(this);
}
console.log(function1());

// this keyword with nested function
// this -> strict mode -> nested function -> undefined
// this -> unstrict mode -> nested function -> global object
function outerFunction() {
  function innerFunction() {
    return console.log(this);
  }
  console.log(innerFunction());
}
console.log(outerFunction());
