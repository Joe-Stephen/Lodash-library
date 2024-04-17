import _ from "lodash";

//Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If path is a function, it's invoked for, and this bound to, each element in collection.

let result = _.invokeMap(
  [
    [5, 1, 7],
    [3, 2, 1],
  ],
  "sort"
);

let result2 = _.invokeMap([123, 456], String.prototype.split, "");

console.log(result);
console.log(result2);
