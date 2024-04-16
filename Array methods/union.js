import lodash from "lodash";

// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

const array1 = [ 2, 3, 3, 4, 4];
const array2 = [1, 2, 8, 9, 10];

const result = lodash.union(array1, array2);
console.log(result);
