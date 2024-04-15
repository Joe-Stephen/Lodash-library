import lodash from "lodash";

// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 1, 2];
const array3 = [4, 5, 6, 1];

const result = lodash.intersection(array1, array2, array3);
console.log(result);
