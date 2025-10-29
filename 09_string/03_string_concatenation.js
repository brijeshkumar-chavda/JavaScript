// Topic: String Concatenation

// Using + operator to concatenate strings
const string1 = "String";
const string2 = "Concatenation";
const result = string1 + " " + string2;
console.log(result);

// Math operation can't be done between numbers which are store as String.
const variable1 = "1";
const variable2 = "2";
const result1 = variable1 + variable2;
console.log(result1);

// Math operation can be done if you add + at the front of both variableName.
const variable3 = "1";
const variable4 = "2";
const result2 = +variable3 + +variable4;
console.log(result2);
