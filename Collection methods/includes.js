import _ from "lodash";

//Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

let result = _.includes([6, 4, 6], 4);

let result2 = _.includes("onetwothree", "net");

let result3 = _.includes({ a: 1, b: 2 }, 1);

console.log(result);
console.log(result2);
console.log(result3);
