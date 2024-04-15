import lodash from "lodash";

// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

//drop last 1 user with their active value===falsy;
const result = lodash.dropRightWhile(users, (user) => !user.active);
console.log(result);

//drop last 2 users with their active value===falsy;
const result2 = lodash.dropRightWhile(users, (user) => !user.active);
console.log(result2);
