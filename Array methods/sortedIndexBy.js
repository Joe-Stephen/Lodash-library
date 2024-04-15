import lodash from "lodash";

// This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).

const array = [{ x: 4 }, { x: 6 }];

const result = lodash.sortedIndexBy(array, { x: 5 }, (o) => o.x);
console.log(result);
