// Passing object as parameter in function and destructuring the object

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  nestedObject: {
    key4: "value4",
    key5: "value5",
  },
};

// Pass the object in function as parameter and then use object destructure syntax to extract the object property.
const myFunction = (passingObject) => {
  const { key1, key2, key3 } = passingObject;
  console.log(key1);
  console.log(key2);
  console.log(key3);
};

myFunction(object);

// Destructure object right away in parameter place.
const myFunction1 = ({ key1, key2, key3, nestedObject: { key4, key5 } }) => {
  console.log(key1);
  console.log(key2);
  console.log(key3);
  console.log(key4);
  console.log(key5);
};

myFunction1(object);
