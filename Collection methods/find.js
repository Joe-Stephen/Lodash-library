import _ from "lodash";

//Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

let result = _.find(
  [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ],
  "active"
);

let result2 = _.find(
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
