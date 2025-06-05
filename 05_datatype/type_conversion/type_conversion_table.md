| Input            | Number    | String            | Boolean |
| ---------------- | --------- | ----------------- | ------- |
| 123              | 123       | "123"             | true    |
| "123"            | 123       | "123"             | true    |
| "abc"            | NaN       | "abc"             | true    |
| "123abc"         | NaN       | "123abc"          | true    |
| true             | 1         | "true"            | true    |
| false            | 0         | "false"           | false   |
| ""               | 0         | ""                | false   |
| null             | 0         | "null"            | false   |
| undefined        | NaN       | "undefined"       | false   |
| NaN              | NaN       | "NaN"             | false   |
| []               | 0         | ""                | true    |
| [1]              | 1         | "1"               | true    |
| [1, 2, 3, "abc"] | NaN       | "1,2,3,abc"       | true    |
| {}               | NaN       | "[object Object]" | true    |
| Infinity         | Infinity  | "Infinity"        | true    |
| -Infinity        | -Infinity | "-Infinity"       | true    |
| 0                | 0         | "0"               | false   |
| -0               | 0         | "0"               | false   |

### Notes on the Conversions:

1. **Numbers**: Convert to their string representation directly.
2. **Strings**: Numeric strings convert to their corresponding number; non-numeric strings convert to `NaN`.
3. **Booleans**: `true` converts to `1`, `false` converts to `0`.
4. **Empty String**: Converts to `0` for numbers and `false` for boolean.
5. **null**: Converts to `0` for numbers and `"null"` for strings.
6. **undefined**: Converts to `NaN` for numbers and `"undefined"` for strings.
7. **Arrays**: Empty arrays convert to `0` for numbers and `""` for strings; arrays with one element convert to the element's value if numeric, otherwise to `NaN` for numbers.
8. **Objects**: Convert to `NaN` for numbers and their default string representation (`"[object Object]"`) for strings.
9. **NaN**: Remains `NaN` for numbers and converts to `"NaN"` for strings.
10. **Infinity and -Infinity**: Stay as is for numbers and convert to `"Infinity"` and `"-Infinity"` for strings.
11. **Zero (0) and Negative Zero (-0)**: Both convert to `0` for numbers and `"0"` for strings, and both are falsy.
