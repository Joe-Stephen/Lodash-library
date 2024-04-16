import lodash from "lodash";

//This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.

const result = lodash.zipObject(["a", "b"], [true, false]);
console.log(result);
