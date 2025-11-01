// `object.create()` Method

// Q.What is Object.create() method ?
// - In other programming languages when you want to create an object you need to create a class and then after you can create the object of that class. But in JavaScript you can actually create object as datatype and use that object as template just like class. This type of object known as `prototype`. So you don't have to create class. Use that main object with `Object.create(mainObjectkey)` to create object (instance).

// Q. How this `Object.create()` method work?
// - When you use this method with the main object it will create the empty object and then inherit all the property and method into the newly created object.

// NOTE
// Q.Why object is known as object?
// - In simple terms you can think object is key and value pair that store data. But in OOPs there is object also. This object and OOPs object are the same object. Because in OOPs object store data in heap and stack. In heap store address and in stack store the value. Same thing happens in object it also store data in key and value form.

// - object
// key: value

// - OOPs object
// heap: stack (address: value)

// - object === OOPs object
// - key: value === heap: stack

const mainObject = {
  key1: "value1",
  key2: "value2",
};

// Creating new object from main object
const object1 = Object.create(mainObject);
console.log(object1.key1);
console.log(object1.key2);

// Creating new object form main object and overriding all the value
const object2 = Object.create(mainObject);
object2.key1 = "foo";
object2.key2 = "bar";

console.log(object2.key1);
console.log(object2.key2);

// `Object.create()` also take anonymous object which help to set the properties for object (instance)
const object3 = Object.create(mainObject, {
  key: { value: "value" },
});
console.log(object3);
