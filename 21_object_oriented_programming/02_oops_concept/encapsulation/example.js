// Encapsulation

// Q. What is Encapsulation?
// - Encapsulation is a fundamental principle in object-oriented programming that aims to bundle data and related functionality together, hiding the internal implementation details from outside access. It helps create more modular and maintainable code by enforcing data privacy and providing controlled access to the internal state of objects.
// - In JavaScript, encapsulation can be achieved using various techniques, although it's important to note that JavaScript does not have built-in access modifiers like private or protected.
// - It is the process of hiding data from the outside world.

// Example
class WashingMachine {
  // Public property
  brand;

  // Private property
  #powerStatus = false;

  constructor(brand) {
    this.brand = brand;
  }

  // Public method
  start() {
    if (!this.#powerStatus) {
      this.#turnOn();
    }

    this.#spin();
    this.#darin();
    this.stop();
  }

  stop() {
    this.#turnOff();
    console.log("washing machine stopped");
  }

  // Private method
  #turnOn() {
    this.#powerStatus = true;
    console.log("Power ON");
  }

  #turnOff() {
    this.#powerStatus = false;
    console.log("Power OFF");
  }

  #spin() {
    console.log("spinning the washing machine");
  }

  #darin() {
    console.log("draining the washing machine");
  }
}

const samsungWashingMachine = new WashingMachine("samsung");
console.log(samsungWashingMachine.start());
