import lodash from "lodash";

//Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.

const result = lodash.xor([2, 1, 3, 5], [2, 3, 1, 4]);
console.log(result);
