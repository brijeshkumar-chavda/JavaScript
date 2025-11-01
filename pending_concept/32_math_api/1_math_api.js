// - In JavaScript there is Math object that gives PI values.
// - This PI value is constant at the core level of JavaScript.
// - Sometimes in interview they ask about how we can change the value of PI to whatever you want.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// - Here you can see in the output that there are properties which we can't access it.
// - This properties are hard coded inside the JavaScript. Because of that we are not able to change the value.

// Output:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// How can we setup custom access for the object's properties.

// Step: 1
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",

  method: function () {
    console.log("I am method");
  },
};

console.log(Object.getOwnPropertyDescriptor(object, "key"));

// Output:
// {
//   value: 'value',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Step: 2
// - As you can see in the output we have properties that can help use to setup custom access for the object property -> `key`.

Object.defineProperty(object, "key1", {
  //   writable: false,
  enumerable: false, // This will not iterate the `key1` property in for loop.
});

// console.log(Object.getOwnPropertyDescriptor(object, "key"));

for (let [key, value] of Object.entries(object)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
