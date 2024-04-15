import lodash from "lodash";

// Recursively flatten array up to depth times.

const array = [1, [2, [3, [4]], 5]];

//flatten upto 1 level
const result = lodash.flattenDepth(array);
console.log(result);

//flatten upto 2 level
const result2 = lodash.flattenDepth(array, 2);
console.log(result2);

//flatten upto 3 level
const result3 = lodash.flattenDepth(array, 3);
console.log(result3);