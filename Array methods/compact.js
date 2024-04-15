import lodash from "lodash";

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

const array = [false, 2, 0, 4, NaN, 6, "", 8, undefined, 10];
const result = lodash.compact(array);
console.log(result);
