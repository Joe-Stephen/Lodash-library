import lodash from "lodash";

// Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
const result = lodash.takeRightWhile(users, (o) => !o.active);
console.log(result);
