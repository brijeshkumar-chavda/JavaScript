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
