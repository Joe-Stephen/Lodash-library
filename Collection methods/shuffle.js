import _ from "lodash";

//Gets a random element from collection.

let result = _.shuffle([
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "Joe", age: 60, active: false },
  { user: "freddy", age: 140, active: true },
]);

let result2 = _.shuffle([1, 5, 4, 8, 6, 7, 8, 9]);

console.log(result);
console.log(result2);
