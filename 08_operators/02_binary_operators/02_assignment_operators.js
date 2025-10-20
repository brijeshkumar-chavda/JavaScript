// Assignment Operators

// There are 4 types of assignment operators in JavaScript:

// 1. Assignment Operators:
// = Simple Assignment Operator
let variable = 1;
console.log(variable);

// += Addition Assignment Operator
let variable1 = 1;
variable1 += 1;
console.log(variable1);

// -= Subtraction Assignment Operator
let variable2 = 1;
variable2 -= 1;
console.log(variable2);

// *= Multiplication Assignment Operator
let variable3 = 2;
variable3 *= 2;
console.log(variable3);

// /= Division Assignment Operator
let variable4 = 4;
variable4 /= 2;
console.log(variable4);

// %= Remainder Assignment Operator
let variable5 = 10;
variable5 %= 3;
console.log(variable5);

// **= Exponentiation Assignment Operator
let variable6 = 2;
variable6 **= 3;
console.log(variable6);

// 2. Shift Assignment Operators:
// <<= Left Shift Assignment Operator
// >>= Right Shift Assignment Operator
// >>>= Unsigned Right Shift Assignment Operator

// 3. Bitwise Assignment Operators:
// &= Bitwise AND Assignment Operator
// |= Bitwise OR Assignment Operator
// ^= Bitwise XOR Assignment Operator

// 4. Logical Assignment Operators
// &&= Logical AND assignment operator
// -> It only assigns if the left-hand side is truthy.
let variable7 = true;
variable7 &&= false;
console.log(variable7);

// ||= Logical OR assignment operator
// -> It only assigns if the left-hand side is falsy.
let variable9 = false;
variable9 ||= true;
console.log(variable9);

// ??= Nullish coalescing assignment operator
// -> It only assigns if the left-hand side is null or undefined.
let variable8 = null;
variable8 ??= "default";
console.log(variable8);
