import lodash from "lodash";

// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
const result = lodash.takeWhile(users, (o) => o.active);
console.log(result);
