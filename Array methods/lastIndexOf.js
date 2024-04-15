import lodash from "lodash";

// This method is like _.indexOf except that it iterates over elements of array from right to left.

const array1 = [1, 2, 3, 2, 5, 6, 2, 8, 2, 10];

//find the last index of value `2`
const result = lodash.lastIndexOf(array1, 2);
console.log(result);

//find the last index of value `2` from the given index as end
const result2 = lodash.lastIndexOf(array1, 2, 2);
console.log(result2);
