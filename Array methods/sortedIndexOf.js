import lodash from "lodash";

// This method is like _.indexOf except that it performs a binary search on a sorted array.

const array = [4, 5, 5, 5, 6, 8, 9, 10];

const result = lodash.sortedIndexOf(array, 5);
console.log(result);
