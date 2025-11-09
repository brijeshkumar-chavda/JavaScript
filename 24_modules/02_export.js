// `export`

// What
// - In JavaScript, the export keyword is used to expose functionality from a module so that it can be imported and used in other modules.
// - When you use export, you can make variables, functions, or classes available for use in other modules. By exporting specific elements, you define the public interface of your module, allowing other modules to access and utilize those exported elements.

// Note
// - You can only use default export one time. In most case it is your class.
// - You can't export default const value.

// How
// - In JavaScript there are two keyword `export default` and `export {}` to use modules.

// There are three types of export:
// 1. Named export
// 2. Default export
// 3. Exporting multiple element

// There are two ways to export:
// 1. Inline export
// 2. Endline export

// Inline export
// 1. Default export
export default class MyClass {
  constructor() {} 
}

// 2. Named export
export let variable = "value"; 
export function function1() {}

// 3. Exporting multiple items
// Endline export
// export default MyClass
// export {variable , function1}
