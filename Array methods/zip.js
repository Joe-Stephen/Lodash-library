import lodash from "lodash";

//Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

const result = lodash.zip(['a', 'b'], [1, 2], [true, false]);
console.log(result);
