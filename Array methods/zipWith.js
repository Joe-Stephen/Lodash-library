import lodash from "lodash";

//This method is like _.zip except that it accepts iteratee to specify how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group).

const result = lodash.zipWith(
  [1, 2],
  [10, 20],
  [100, 200],
  (a, b, c) => a + b + c
);
console.log(JSON.stringify(result));
