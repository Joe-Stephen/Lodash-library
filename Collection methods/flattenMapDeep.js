import _ from "lodash";

//This method is like _.flatMap except that it recursively flattens the mapped results.

function duplicate(n) {
  return [[[n,n]]];
}

let result = _.flatMapDeep([1, 2], duplicate);

let result2 = _.flatMapDeep([1, 2, 3, 4, 5], duplicate);

console.log(result);
console.log(result2);
