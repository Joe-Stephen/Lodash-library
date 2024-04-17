import _ from "lodash";

//Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

let result = _.groupBy([6.1, 4.2, 6.3], Math.floor);

let result2 = _.groupBy(["one", "two", "three"], "length");

console.log(result);
console.log(result2);
