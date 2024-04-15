import lodash from "lodash";

// Removes elements from array corresponding to indexes and returns an array of removed elements.
// Note: Unlike _.at, this method mutates array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = lodash.pullAt(array, [1, 3, 5, 7, 9]);
console.log(result);
