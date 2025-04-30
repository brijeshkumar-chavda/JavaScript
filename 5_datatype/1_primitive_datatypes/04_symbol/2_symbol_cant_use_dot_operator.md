### Why can't we use dot operator `car.carId` for symbol instated of square bracket `car[carId]` for adding symbol in object as unique key?

- Because `Symbols` are not enumerable (Something that can be loop. For example like 123...123...) by default. This means that they do not appear in the list of properties when you enumerate the properties of the object using methods like `Object.keys()`, `for...in` loops, or `console.log()`.
- In Simple Terms: When we use car.carId, the symbol property carId won't show up because symbols are like hidden keys in JavaScript objects. They're like secret codes that only JavaScript knows about. So, when we log the car object, JavaScript doesn't show us these secret codes by default.

### Why Symbols Are Not Enumerated?

- **Design Choice:** This behavior is by design to provide a way to create properties that are not exposed in normal property enumeration. This can be useful for creating internal properties that should not interfere with the normal properties of the object.
- **Privacy and Encapsulation:** Symbols can be used to add private or semi-private properties to objects, which helps in encapsulating implementation details.

### Example:

1. **Create the Car Object:**

   ```javascript
   const car = {
     make: "Toyota",
     model: "Corolla",
     year: 2020,
   };
   ```

   - The `car` object has three properties: `make`, `model`, and `year`.

2. **Create a Symbol:**

   ```javascript
   const carId = Symbol("id");
   ```

   - A unique symbol `carId` is created. The description `'id'` is optional and used only for debugging purposes.

3. **Add a Symbol Property to the Car:**

   ```javascript
   car[carId] = "12345";
   ```

   - The property `carId` is added to the `car` object using the symbol as the key. This property is unique and will not conflict with other properties.

4. **Log the Car Object:**

   ```javascript
   console.log(car);
   // Output: { make: 'Toyota', model: 'Corolla', year: 2020 }
   ```

   - When logging the `car` object, the symbol property does not appear in the output. This is because `console.log()` does not enumerate symbol properties.

5. **Access the Symbol Property:**
   ```javascript
   console.log(car[carId]); // Output: '12345'
   ```
   - You can access the value of the symbol property using the symbol as the key.

### How to Enumerate Symbol Properties?

If you want to see all properties, including symbol properties, you can use `Object.getOwnPropertySymbols()` or `Reflect.ownKeys()`:

```javascript
// Get all symbol properties of the car object
const symbols = Object.getOwnPropertySymbols(car);
console.log(symbols); // Output: [ Symbol(id) ]

// Access the symbol property value
console.log(car[symbols[0]]); // Output: '12345'

// Get all properties including symbol properties
const allKeys = Reflect.ownKeys(car);
console.log(allKeys); // Output: [ 'make', 'model', 'year', Symbol(id) ]
```

### Summary:

- **Symbols are not enumerated**: Symbol properties do not show up in standard property enumerations, which is why `carId` is not displayed when logging the `car` object.
- **Accessing Symbol properties**: You can directly access the symbol properties using the symbol as the key or use methods like `Object.getOwnPropertySymbols()` or `Reflect.ownKeys()` to get a list of symbol properties.

This behavior allows you to create properties that are not exposed during normal object enumeration, providing a way to add private or internal properties to objects.
