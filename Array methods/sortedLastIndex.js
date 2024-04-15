import lodash from "lodash";

// This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.

const array = [4, 5, 5, 5, 5, 6];

const result = lodash.sortedLastIndex(array, 5);
console.log(result);
