// this Keyword

// What
// - this refers to the object that "owns" the currently executing code.

// Note
// this == Current Context (loosely say: Current Object)

// this keyword with global scope
// this -> strict mode -> global scope -> global object
// this -> unstrict mode -> global scope -> global object
console.log(this);
// TODO: Complete the @chaiaurcode playlist about this topic and comeback letter
// Constructor Call
// When using new, this refers to the newly created instance.
function Person(name) {
  this.name = name;
}
const person1 = new Person("Alice");
console.log(person1.name); // this refers to the new Person instance, person1.
