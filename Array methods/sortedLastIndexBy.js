import lodash from "lodash";

// This method is like _.sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).

const array = [{ x: 4 }, { x: 6 }];

const result = lodash.sortedLastIndexBy(array, { x: 7 }, (o) => o.x);
console.log(result);
