import lodash from "lodash";

// Recursively flattens array.

const array = [1, [2, [3, [4]], 5]];
const result = lodash.flattenDeep(array);
console.log(result);
