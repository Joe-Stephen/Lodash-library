import lodash from "lodash";

// This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
// Note: Unlike _.pullAllWith, this method returns a new array.
// The comparator function is crucial in the differenceWith() method because it defines how elements are compared for equality between the two arrays. Unlike some other array comparison methods that rely on strict equality (===), differenceWith() allows you to define a custom comparison logic.

const arr1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];
const arr2 = [
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

// Custom comparator function
const compare = (a, b) => a.id === b.id;

const difference = lodash.differenceWith(arr1, arr2, compare);

console.log(difference);
// Output: [{ id: 1, name: 'John' }]
