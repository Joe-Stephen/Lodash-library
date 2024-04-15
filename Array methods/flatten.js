import lodash from "lodash";

// Flattens array a single level deep.

const array = [1, [2, [3, [4]], 5]];
const result = lodash.flatten(array);
console.log(result);
