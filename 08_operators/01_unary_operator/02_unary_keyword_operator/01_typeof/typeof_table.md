| Data Type          | `typeof`              | `instanceof`    | `isArray`      |
| ------------------ | --------------------- | --------------- | -------------- |
| Numbers            | "number"              | Not applicable  | Not applicable |
| Strings            | "string"              | Not applicable  | Not applicable |
| Booleans           | "boolean"             | Not applicable  | Not applicable |
| Null               | "object" (limitation) | Not applicable  | Not applicable |
| Undefined          | "undefined"           | Not applicable  | Not applicable |
| Symbol (modern JS) | "symbol"              | Not applicable  | Not applicable |
| Arrays             | "object" (limitation) | Not applicable  | **true**       |
| Dates              | "object"              | **true** (Date) | Not applicable |
| Sets               | "object"              | **true** (Set)  | Not applicable |
| Maps               | "object"              | **true** (Map)  | Not applicable |
| Objects (general)  | "object"              | Not recommended | Not applicable |

**Key Points:**

- **typeof:** A good general check for basic data types (numbers, strings, booleans, undefined). However, it has limitations for arrays, null, and objects.
- **instanceof:** Useful for checking if a value is an instance of a specific constructor function (e.g., `Date`, `Set`, `Map`). Not recommended for core data types.
- **isArray:** Specifically designed to check if a value is an array.

**Choosing the Right Method:**

- For basic data types, `typeof` is usually sufficient.
- For arrays, use `isArray`.
- For Dates, Sets, and Maps, use `instanceof` to confirm their specific type.
- For general object checks (including specialized objects), use `typeof value === 'object'` with caution, as it might include unexpected values.
