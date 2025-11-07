// Module Scope

// What
// - When you create variable inside the module it will only accessible to the files which are importing.
// - Even if the variable is declare as a global scope in module but it's still accessible via imports.

export const myVariable =
  "I have the Module Scope and don't forget to use export at start!";
