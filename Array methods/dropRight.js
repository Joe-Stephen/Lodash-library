import lodash from "lodash";

// Creates a slice of array with n elements dropped from the end.

const array = [2, 3, 0, 5, 6, 7, 7, 18, 4];

//dropping first 1 element(give no argument)
const result = lodash.dropRight(array);
console.log(result);

//dropping first `n` elements(give `n` as argument)
const result2 = lodash.dropRight(array, 5);
console.log(result2);
