import lodash from "lodash";

// Gets all but the last element of array.

const array = [1, 2, 3, 4, 5, 6];

const result = lodash.initial(array);
console.log(result);
