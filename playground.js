// this keyword with nested arrow function
// this -> strict & unstrict mode -> nested arrow function -> Global object
const outerArrowFunction = () => {
  const innerArrowFunction = () => {
    console.log(this);
  };
  console.log(innerArrowFunction());
};
console.log(outerArrowFunction());
