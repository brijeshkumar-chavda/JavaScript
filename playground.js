function outerFunction() {
  let a = 1;
  function innerFunction() {
    let a = 11;
    return a;
  }
  return innerFunction();
}

console.log(outerFunction());
