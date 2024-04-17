import _ from "lodash";

//Gets a random element from collection.

let result = _.some(
  [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
    { user: "Joe", age: 60, active: false },
    { user: "freddy", age: 140, active: true },
  ],
  { user: "Joe", age: 60, active: false }
);

let result2 = _.some(
  [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
    { user: "Joe", age: 60, active: false },
    { user: "freddy", age: 140, active: true },
  ],
  ["active", true]
);

console.log(result);
console.log(result2);
