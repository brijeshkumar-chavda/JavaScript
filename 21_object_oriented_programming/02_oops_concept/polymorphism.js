// Polymorphism

// What
// - Polymorphism is a concept in object-oriented programming that allows objects of different classes to share the same method name, but have different implementations of that method.

// Example
// - Both class have same method name. But behavior of the method is different.
// - This is behavior of polymorphism.

class Class1 {
  method() {
    return "I am method of Class1";
  }
}

class Class2 extends Class1 {
  method() {
    return "I am method of Class2";
  }
}

const instance1 = new Class1();
const instance2 = new Class2();

console.log(instance1.method());
console.log(instance2.method());
