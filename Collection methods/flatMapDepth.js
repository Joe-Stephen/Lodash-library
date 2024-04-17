import _ from "lodash";

//This method is like _.flatMap except that it recursively flattens the mapped results up to depth times.

function duplicate(n) {
  return [[[n, n]]];
}

let result = _.flatMapDepth([1, 2], duplicate, 2);

let result2 = _.flatMapDepth([1, 2, 3, 4, 5], duplicate, 3);

console.log(result);
console.log(result2);
