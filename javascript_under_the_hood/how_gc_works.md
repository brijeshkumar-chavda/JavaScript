# How garbage collection works with heap and stack memory?

## Stack Memory

The stack is **automatically managed** and doesn't need garbage collection. Here's how it works:

- Stores primitive values and function call information (execution contexts)
- Works in a **Last-In-First-Out (LIFO)** manner
- When a function finishes executing, its stack frame is **immediately popped off** and the memory is freed
- Very fast and efficient

```javascript
function calculate() {
  let x = 5; // stored on stack
  let y = 10; // stored on stack
  return x + y;
} // When function ends, x and y are automatically removed from stack

calculate();
```

## Heap Memory

The heap stores **objects, arrays, and functions** (reference types). This is where **garbage collection** happens.

The garbage collector's job is to find and remove objects that are **no longer reachable** (no references pointing to them).

### How Garbage Collection Works:

**1. Mark and Sweep Algorithm** (most common in JavaScript engines like V8):

```javascript
function createObjects() {
  let obj1 = { name: "Alice" }; // allocated on heap
  let obj2 = { name: "Bob" };   // allocated on heap
  
  obj1 = null; // Alice object is now unreachable
  
  return obj2; // Bob object is still reachable
}

let result = createObjects();
// Garbage collector will eventually clean up the Alice object
// Bob object stays because 'result' still references it
```

**Process:**
- **Mark phase**: GC starts from "roots" (global variables, current execution stack) and marks all reachable objects
- **Sweep phase**: GC removes all unmarked (unreachable) objects from heap

**2. Reference Counting** (older approach, less common now):

```javascript
let obj = { data: "something" }; // reference count = 1
let obj2 = obj;                  // reference count = 2

obj = null;  // reference count = 1
obj2 = null; // reference count = 0 → eligible for GC
```

Problem: Can't handle circular references:

```javascript
function createCircular() {
  let a = {};
  let b = {};
  a.ref = b; // a references b
  b.ref = a; // b references a (circular!)
  
  return "done";
}
// a and b reference each other but nothing outside references them
// Reference counting would fail, but mark-and-sweep handles this fine
```

### When Does GC Run?

- Runs **automatically** in the background
- Triggered when heap memory reaches certain thresholds
- You can't force it manually (well, you can in some environments, but shouldn't)
- Modern engines use **generational GC**: young objects (recently created) are checked more frequently than old objects

### Memory Leak Example:

```javascript
let leakyArray = [];

function leak() {
  leakyArray.push(new Array(1000000)); // keeps growing!
  // Objects are reachable through leakyArray, so GC can't collect them
}

setInterval(leak, 100); // Memory leak!
```

### Key Takeaways:

- **Stack**: Self-cleaning, no GC needed, super fast
- **Heap**: Needs garbage collection for reference types
- **GC finds unreachable objects** and frees their memory
- Modern JavaScript engines (V8, SpiderMonkey) use sophisticated GC algorithms
- You don't control GC, but you should avoid creating memory leaks by clearing references you don't need

Does this clear things up?