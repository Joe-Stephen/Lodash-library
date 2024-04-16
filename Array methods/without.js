import lodash from "lodash";

// Creates an array excluding all given values using SameValueZero for equality comparisons.

const array = [2, 1, 2, 3];

const result = lodash.without(array, 1,2);
console.log(result);
