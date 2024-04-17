import _ from "lodash";

//This method is like _.forEach except that it iterates over elements of collection from right to left.

let result = _.every([true, 1, null, "yes"], Boolean);

let result2 = _.every(
  [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: false },
  ],
  { active: false }
);

console.log(result);
console.log(result2);
