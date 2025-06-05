# Ask AI

Can you explain me `concept` in javascript in this format with simple language

What
Why
How 
Syntax
Example
Note
Pros
Cons

# Array VS Object

| Array                                       | Object                                                                                                                                 |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| - It is iterable.                           | - It isn't directly iterable. But you can still iterate.                                                                               |
| - It can store different type data.         | - It can store different type of data. But key must in string format.                                                                  |
| - It can store duplicate value.             | - It can store duplicate value with different key. If you add same key in object it will take the last added key and update the value. |
| - It store data in linear form.             | - It store data in `key : value` form.                                                                                                 |
| - Element can access by using index number. | - Element can't be access using index number.                                                                                          |
| - Order of element is guaranteed.           | - Order of the property isn't guaranteed.                                                                                              |
|                                             | - It doesn't have size property.                                                                                                       |

# Set VS Map

| Set                                 | Map                                                                   |
| ----------------------------------- | --------------------------------------------------------------------- |
| - It is iterable.                   | - It is iterable.                                                     |
| - It can store different type data. | - It can store different type of data and key can be anything in map. |
| - It can't store duplicate value.   | - It can store duplicate value with different key.                    |
| - It store data in linear form.     | - It store data in `key : value` form.                                |
|                                     | - It has size property.                                               |

# .map() VS .filter()

| Feature                      | `filter`                                                        | `map`                                                                       |
| ---------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Purpose**                  | Filter elements based on a condition                            | Transform elements and create a new array                                   |
| **Callback function output** | `true` or `false` (includes/excludes)                           | A value to be included in the new array                                     |
| **New array elements**       | Only elements for which `true` is returned                      | Transformed values from the callback function                               |
| **Modifies original array**  | No                                                              | No (creates a new array)                                                    |
| **Side effects**             | Can be used for actions within the loop (e.g., logging)         | May have side effects within the loop (e.g., modifying temporary variables) |
| **Functional approach**      | More functional, focuses on filtering logic                     | More functional, focuses on transformation logic                            |
| **Common use cases**         | - Finding specific elements                                     | - Doubling numbers                                                          |
|                              | - Removing elements from an array                               | - Converting strings to uppercase                                           |
|                              | - Selecting objects based on properties                         | - Creating a new array with specific calculations                           |
| **Example (numbers array)**  | Filter even numbers                                             | Double each number                                                          |
| **Callback function**        | `number % 2 === 0` (even)                                       | `number * 2` (double)                                                       |
| **Chaining**                 | Can be chained with `map` for filtering and then transformation | Can be chained with `filter` for additional filtering after transformation  |

**Additional Notes:**

- Both `filter` and `map` are non-mutating methods, meaning they don't modify the original array. They create a new array with the filtered or transformed elements.
- While `filter` is generally considered more functional due to its focus on filtering logic, `map` can also be used functionally when the transformations are pure (without side effects).
- When choosing between `filter` and `map`, consider your desired outcome: filtering elements based on a condition (`filter`) or creating a new array with transformed elements (`map`).

# Iteration

1. For Iterating Array

- for loop
- for of loop
- forEach()

2. For Iteration Object

- for in loop: use to iterate over object properties.

# Explicit VS Implicit

- Explicit: Stated clearly and directly, leaving no room for ambiguity or doubt.
- Implicit: Unstated but suggested or implied. It's something that is understood without being directly expressed.

# Inclusive VS Exclusive

- Inclusive: Think of "inclusive" as including everything. It means something is in or part of a range or group. Imagine a party invitation that says "Everyone is welcome!" - that's inclusive.

- Exclusive: On the other hand, exclusive means something is not included. It's outside of a range or group. Think of a VIP club with a sign \*\*that says "Members Only" - that's exclusive.

# Immutable VS

- Immutable: Cannot be changed after it is created.
- Mutable: Can be changed after it is created.

# Terminology

Attribute == Fields
Function == Method == Operations == Behaviors

1. Property

- In object name pair is known as property.
- JavaScript also has in-built property for example .length (NOTE: This not function/ method)

2. Attribute == Fields

- When we create a class and define variable inside it. That variable is known as Attribute.

3. Element

- When store value in array it known as element.

4. Function Definition

- It is the name of function.

5. State of the Object

- When we assign value to the properties it known as state of the object.
- We can also assign the value to the properties when we are declaring the object. This is possible because of the constructor.

# What is Passing Reference?

- Imagine a function as a recipe for a cake. The recipe itself (the function code) tells you how to make the cake (what actions to take). Now, imagine you have a note that simply says "Cake Recipe" on it. This note doesn't actually bake the cake itself (it doesn't call the function).
- Function: The actual recipe with all the instructions (the function code).
- Function Reference: The note that says "Cake Recipe" (a variable holding the function's location in memory).

# What is Method?

- Functions that are properties of an object and usually act on the object.

# What is Constructors?

- Functions used to create new objects.

# What is Prase?

- Parsing is the process of taking a JSON string (which is essentially a text format) and converting it into a data structure that your programming language can use (e.g., an object or dictionary).

# What is Serializes?

- In computing, serialization is the process of translating a data structure or object state into a format that can be stored or transmitted and reconstructed later.

# Types of Naming Convention

1. Camel Case: helloWorld
2. Pascal Case: HelloWorld
3. Snake Case: hello_world
4. Kebab Case: hello-world
5. Upper Snake Case: HELLO_WORLD
