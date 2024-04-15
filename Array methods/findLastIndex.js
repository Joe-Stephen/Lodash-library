import lodash from "lodash";

// This method is like _.findIndex except that it iterates over elements of collection from right to left.

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

// find the index of the first user who matches the given condition
const result = lodash.findLastIndex(users, (user) => user.user === "pebbles");
console.log(result);

// find the index of the first user who matches the given conditions
const result2 = lodash.findLastIndex(
  users,
  (user) => user.user === "fred" && !user.active
);
console.log(result2);
