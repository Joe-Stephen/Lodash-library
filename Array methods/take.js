import lodash from "lodash";

// Creates a slice of array with n elements taken from the beginning.

const array = [1, 2, 3, 3, 4, 4, 8, 9, 10];
const result = lodash.take(array, 3);
console.log(result);
