import _ from "lodash";

//Gets a random element from collection.

let result = _.sampleSize([
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "Joe", age: 60, active: false },
  { user: "freddy", age: 140, active: true }
], 2);

let result2 = _.sampleSize([1, 5, 4, 8, 6, 7, 8, 9], 3);

console.log(result);
console.log(result2);
