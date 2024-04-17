import _ from "lodash";

//This method is like _.find except that it iterates over elements of collection from right to left.

let result = _.findLast(
  [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ],
  "active"
);

let result2 = _.findLast(
  [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ],
  (o) => {
    return o.age < 40;
  }
);

console.log(result);
console.log(result2);
