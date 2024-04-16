import lodash from "lodash";

// Gets all but the first element of array.

const array = [1, 2, 3, 3, 4, 4, 8, 9, 10];
const result = lodash.tail(array);
console.log(result);
