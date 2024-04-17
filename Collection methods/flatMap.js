import _ from "lodash";

//Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).

function duplicate(n) {
  return [n, n, n, n, n, n, n, n];
}

let result = _.flatMap([1, 2], duplicate);

let result2 = _.flatMap([1, 2, 3, 4, 5], duplicate);

console.log(result);
console.log(result2);
