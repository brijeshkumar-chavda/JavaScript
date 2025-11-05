class Class1 {
  constructor(parameter1) {
    this._variable1 = parameter1;
  }

  get _variable1() {
    // return this._variable1.toUpperCase();
    return "_ has use so this is now private variable ";
  }
}

const instance1 = new Class1("abc");
console.log(instance1._variable1);
