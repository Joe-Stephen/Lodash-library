import lodash from "lodash";

// This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

// find the index of the first user who matches the given condition 
const result = lodash.findIndex(users, (user) => user.user === "barney");
console.log(result);

// find the index of the first user who matches the given conditions
const result2 = lodash.findIndex(users, (user) => user.user === "barney" && !user.active);
console.log(result2);
