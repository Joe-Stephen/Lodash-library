import _ from "lodash";

let result = _.countBy([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3], Math.floor);
let result1 = _.countBy(
  ["one", "two", "three", "five", "eleven", "twelve"],
  "length"
);

// Printing the output
console.log(result);
console.log(result1);
