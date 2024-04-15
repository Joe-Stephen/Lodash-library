import lodash from "lodash";

// Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
// Note: Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = lodash.remove(array, (number) => number % 2 );
console.log(result);
console.log(array);
