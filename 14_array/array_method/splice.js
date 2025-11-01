// splice()

// What
// - Add elements: You can insert new elements at a specified index in the array.
// - Remove elements: You can delete a specific number of elements from a starting position within the array.
// - Replace elements: You can combine removal and insertion to effectively replace existing elements with new ones.

// Why
// - Flexibility: splice offers a versatile way to manipulate arrays in various scenarios. You can use it for deleting unwanted items, inserting new data at specific points, or even replacing existing elements.
// - In-place modification: splice modifies the original array directly, avoiding the need to create a new array entirely in some cases. This can be more efficient for memory usage.

// Syntax
// array.splice(start, deleteCount, item1, item2, ..., itemN)

// How
// - start: The index at which to begin the modification (starting from 0). Negative values count from the end of the array.
// - array: The array you want to modify.
// - deleteCount (optional): The number of elements to remove from the starting index. If omitted, all elements from start to the end are removed.
// - item1, item2, ..., itemN (optional): The new elements (zero or more) to insert at the start index. If no new elements are specified, a splice effectively removes elements only.

// Note
// - The splice method modifies the original array and does not create a new one.
// - The splice method returns an array containing the deleted elements. This can be useful if you need to capture the removed items for further processing.

// Example
// Removing elements
// Remove 2 elements starting from index 1 (removes 2 and 3)
let array1 = [1, 2, 3, 4, 5];
array1.splice(1, 2);
console.log(array1); // Output: [1, 4, 5]

// Adding elements
// Adding 12 at index 1
let array2 = [1, 2, 3, 4, 5];
array2.splice(1, 0, 12);
console.log(array2); // Output: [1, 12, 2, 3, 4, 5]

// Replacing elements
// Replace 4 with 13 at index 2
let array3 = [1, 2, 3, 4, 5];
array3.splice(2, 1, 13);
console.log(array3); // Output: [1, 2, 13, 4, 5]
