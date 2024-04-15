import lodash from "lodash";

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = lodash.chunk(array, 2);
console.log(result);
