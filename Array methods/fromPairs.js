import lodash from "lodash";

// The inverse of _.toPairs; this method returns an object composed from key-value pairs.

const array = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

const result = lodash.fromPairs(array);
console.log(result);
