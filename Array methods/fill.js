import lodash from "lodash";

// Fills elements of array with value from start up to, but not including, end.
// Note: This method mutates array.

const array=[1,2,3,4,5,6];

// replace all values with given value
const result = lodash.fill(array, 'a');
console.log(result);

// create a new array and fill it with the given value
const result2 = lodash.fill(Array(3), 'a');
console.log(result2);

// replace all values within the given range (end value is excluded) by the given value
const result3 = lodash.fill([1,2,3,4,5,6], '*', 1, 4);
console.log(result3);
