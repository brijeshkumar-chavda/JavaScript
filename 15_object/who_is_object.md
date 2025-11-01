| Category                 | Data Type                     | Description                                                                                                                          |
| ------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **True Objects**         | - Object                      | The fundamental building block for user-defined collections of key-value pairs. Created using curly braces `{}`.                     |
|                          | - Array                       | Ordered collections of elements, accessed using numerical indexes. Technically objects with a specific behavior for property access. |
|                          | - Function                    | Special type of object that contains executable code. Can be invoked to perform actions.                                             |
|                          | - Date                        | Objects representing specific points in time. Have methods for manipulation and formatting.                                          |
|                          | - RegExp (Regular Expression) | Objects that define patterns for text search and manipulation.                                                                       |
| **Kind-of Objects**      | - String                      | Represent sequences of characters. Although technically objects, they have limited functionality compared to true objects.           |
| **Primitive Data Types** | - Number                      | Represent numeric values (integers, decimals).                                                                                       |
|                          | - Boolean                     | Represent logical values (true or false).                                                                                            |
|                          | - Symbol                      | Unique and immutable identifiers. Used for property keys to avoid conflicts.                                                         |
|                          | - BigInt                      | Arbitrary-precision integers for very large numbers.                                                                                 |
|                          | - undefined                   | Represents the absence of a value assignment.                                                                                        |
|                          | - null                        | Represents the intentional absence of an object value.                                                                               |

**Key Points:**

- **True Objects:** These are full-fledged objects with properties and methods. They can be modified, have prototypes, and can be used with object-oriented programming features like inheritance.
- **Kind-of Objects:** While technically objects, they have limitations. For example, strings cannot have arbitrary properties added to them like true objects. Their primary purpose is to represent specific data types.
- **Primitive Data Types:** These are fundamental data types that are not objects. They are immutable (cannot be changed directly) and passed by value (copies are passed around).

**Additional Notes:**

- Arrays are a special kind of object because they have a numeric indexing scheme for accessing elements. However, they also inherit some methods from the built-in `Array` prototype object.
- Functions are also objects, but they have a special internal structure that allows them to be executed.
