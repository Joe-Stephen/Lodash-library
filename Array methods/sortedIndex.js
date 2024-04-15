import lodash from "lodash";

// Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain it's sort order

const array = [1, 2, 3, 10];

const result = lodash.sortedIndex(array, 4);
console.log(result);
