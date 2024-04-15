import lodash from "lodash";

// Converts all elements in array into a string separated by separator.

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = lodash.join(array1, " ~ ");
console.log(result);
