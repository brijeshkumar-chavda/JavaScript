## 🆚 Object vs. Function Object

| Feature                  | Plain Object                                        | Function Object                                                                       |
| :----------------------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Primary Purpose**      | To store **data** (properties) and represent state. | To execute **code** (logic) and define behavior.                                      |
| **Type**                 | `typeof obj` returns `"object"`                     | `typeof func` returns `"function"`                                                    |
| **Callability**          | **No** (Cannot be executed)                         | **Yes** (Can be invoked using parentheses `()`)                                       |
| **Internal Property**    | Does not have one.                                  | Has an internal property that makes it **callable**.                                  |
| **Mandatory Properties** | Typically none, unless created via a constructor.   | Always has mandatory properties like **`.name`** and **`.length`** (parameter count). |

---

## The Key Concept: Functions are "Callable Objects"

In JavaScript, everything that is not a primitive value (like a string or number) is an **object**. This includes functions. This concept is why functions are called **first-class citizens** in JavaScript:

### 1. Similarities (The Object Part)

Because a function is an object, you can treat it like any other object:

* **Assign Properties:** You can add custom properties to a function and access them via dot notation: `myFunc.version = '1.0';`
* **Assign to Variables:** Functions can be stored in variables: `const myVar = myFunction;`
* **Pass as Arguments:** Functions can be passed as arguments to other functions (callbacks).

### 2. The Difference (The Function Part)

The defining characteristic that separates a function object from a plain object is that the function object has an **internal `[[Call]]` property** (or similar mechanism).

* When the JavaScript engine sees `myFunction()`, it invokes this special internal property, which executes the code defined within the function's body. A plain object lacks this property and cannot be executed.

**In short:**

* A **Plain Object** is just a container for data.
* A **Function Object** is a container for data *and* executable logic.