import lodash from "lodash";

// This method is like _.pull except that it accepts an array of values to remove.
// Note: Unlike _.difference, this method mutates array.

const array1 = [1, 2, 4, 3, 2, 3, 3, 2, 8, 2, 3];

const result = lodash.pullAll(array1, [2, 3]);
console.log(result);
