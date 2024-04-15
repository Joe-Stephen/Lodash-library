import lodash from "lodash";

// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
// Note: Unlike _.pullAll, this method returns a new array.

const array = [2, 3, 0, 12, 4, 6, 8, 10];
const result = lodash.difference(array, [2, 0, 4, 6, 8, 10]);
console.log(result);
