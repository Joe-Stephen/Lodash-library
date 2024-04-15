import lodash from "lodash";

// Creates a new array concatenating array with any additional arrays and/or values.

const array = [2, 0, 4, 6, 8, 10];
const result = lodash.concat(array, 10, [5], [[14]], "string");
console.log(result);
