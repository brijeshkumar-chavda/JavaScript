// async and await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Start"); // Output: Start
  await delay(2000); // Pause execution for 2 seconds
  console.log("Hello"); // Output: Hello
  await delay(1000); // Pause execution for 1 second
  console.log("World"); // Output: World
  console.log("End"); // Output: End
}

greet();

// Start
// [waits for 2 seconds]
// Hello
// [waits for 1 second]
// World
// End
