import lodash from "lodash";

// Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

const users = [
  { user: "barney", active: false },
  { user: "fred", active: true },
  { user: "pebbles", active: true },
];

//drop last 1 user with their active value===falsy;
const result = lodash.dropWhile(users, (user) => !user.active);
console.log(result);
