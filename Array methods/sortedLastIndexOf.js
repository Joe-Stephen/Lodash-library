import lodash from "lodash";

// This method is like _.lastIndexOf except that it performs a binary search on a sorted array.

const array = [4, 5, 5, 5, 6];

const result = lodash.sortedLastIndexOf(array, 5);
console.log(result);
