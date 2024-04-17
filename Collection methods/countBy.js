import _ from "lodash";

//Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

let result = _.countBy([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3], Math.floor);
let result1 = _.countBy(
  ["one", "two", "three", "five", "eleven", "twelve"],
  "length"
);

// Printing the output
console.log(result);
console.log(result1);
