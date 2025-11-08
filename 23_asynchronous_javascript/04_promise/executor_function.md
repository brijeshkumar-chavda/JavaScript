# Executor Function

What

- The executor function is a special function passed to the Promise constructor when creating a new Promise object.
- It's responsible for initiating the asynchronous operation and determining whether the Promise should be resolved or rejected.

Why

- The executor function is crucial because it sets up the conditions for the Promise's outcome.
- It typically contains the code that performs the asynchronous task and decides whether the task was successful or failed.

How

- Arguments: The executor function receives two functions as arguments: resolve and reject.
- Asynchronous Operation: Inside the executor, you perform the asynchronous task.
- Resolution or Rejection:
  - If the task is successful, call the resolve function with the result as an argument. This fulfills the Promise.
  - If the task fails, call the reject function with an error object as an argument. This rejects the Promise.

Example

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { name: "John Doe", age: 30 };
    resolve(data); // Fulfilling the Promise
  }, 2000);
});
```

Note

- The executor function is called immediately when the Promise is created.
- The asynchronous operation within the executor should be performed using asynchronous APIs or techniques (e.g., setTimeout, fetch, XMLHttpRequest).
- The resolve and reject functions should only be called once within the executor.

Analogy

- Think of the executor function as a worker who is tasked with completing a job. The worker performs the job, and then either reports success (resolves the Promise) or failure (rejects the Promise).
