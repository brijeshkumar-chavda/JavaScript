// `null`

// What
// -> Null is standalone value. To understand this let say you are creating weather application which give you the temperature of selected city. For any reason server unable to send you the temperature that means there is no temperature value. At that case weather app shouldn't show `0` on screen. Because 0 also refer as temperature value. At that time we use null to show there is actually no temperature and server are unable to fetch data of temperature.

// Why
// -> Null helps handle cases where a variable should have a value, but the value is currently not available or not applicable.
// -> It provides a way to differentiate between an unassigned variable and a variable with a value of null.

// How
// -> Null is a standalone value. It represents the absence of a value.
// -> When checking the type of null using typeof, it will show object. This is a common misconception, as null is not an object.

// Syntax
let variableName = null;

// Note
// -> Null is often used to represent the absence of a value, such as when a function does not return a value or when an object is expected but not available.
// -> The fact that typeof null returns "object" is a well-known bug from the early days of JavaScript. Due to the potential for breaking existing web code, this incorrect behavior has been maintained for backward compatibility. Remember that null is a primitive value representing the intentional absence of a value, and you should always use strict equality (=== null) to accurately check for it.

// When
// -> Use Null when you want to represent the absence of a value or when a variable should have a value of null.
