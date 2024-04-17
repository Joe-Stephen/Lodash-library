import _ from "lodash";

//Gets a random element from collection.

let result = _.sample([
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
]);

let result2 = _.sample([1, 5, 4, 8, 6, 7, 8, 9]);

console.log(result);
console.log(result2);
