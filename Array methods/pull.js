import lodash from "lodash";

// Removes all given values from array using SameValueZero for equality comparisons.
// Note: Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate.

const array1 = [1, 2, 4, 3, 2, 3, 3, 2, 8, 2, 3];

const result = lodash.pull(array1, 2, 3);
console.log(result);

