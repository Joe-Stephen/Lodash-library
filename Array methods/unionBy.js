import lodash from "lodash";

// This method is like _.union except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
// (value).

const array1 = [{ x: 1 }];
const array2 = [{ x: 2 }, { x: 1 }];

const result = lodash.unionBy(array1, array2, "x");
console.log(result);
