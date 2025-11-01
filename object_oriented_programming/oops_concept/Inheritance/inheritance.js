// Inheritance

// Q. What is Inheritance?
// -  inheritance refers to the mechanism by which an object can inherit properties and methods from another object. It allows you to create a hierarchy of objects where child objects can inherit the characteristics of their parent objects. Inheritance is achieved through prototype chaining in JavaScript.

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Creating instances of the classes
const myAnimal = new Animal("Leo");
myAnimal.eat(); // Output: Leo is eating.

const myDog = new Dog("Max", "Labrador");
myDog.eat(); // Output: Max is eating.
myDog.bark(); // Output: Max is barking.
