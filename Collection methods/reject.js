import _ from "lodash";

//The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.

let result = _.reject(
  [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
  ],
  (o) => o.active
);

console.log(result);
