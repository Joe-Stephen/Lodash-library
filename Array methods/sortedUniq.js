import lodash from "lodash";

// This method is like _.uniq except that it's designed and optimized for sorted arrays.

const array = [1, 2, 3, 3, 4, 4, 8, 9, 10];
const result = lodash.sortedUniq(array);
console.log(result);
