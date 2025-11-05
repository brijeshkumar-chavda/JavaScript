// this keyword with object

// this -> strict & unstrict mode -> object's method -> object itself
const object = {
  key: "value",
  method: function () {
    console.log(this);
    console.log(this.key);
  },
};
console.log(object.method());

// Implicit binding
// - When the method is called on object at that time this keyword bound to be object where the method is called on.

// object.method(this)
// this will bound (refer/ associate) with the object
