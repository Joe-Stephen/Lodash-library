import lodash from "lodash";

// Creates a slice of array with n elements taken from the end.

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
const result = lodash.takeRightWhile(users, (o)=>!o.active);
console.log(result);
