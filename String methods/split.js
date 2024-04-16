import _ from "lodash";

// Splits string by separator

console.log(_.split("a-b-c", "-"));
// => [ 'a', 'b', 'c' ]

console.log(_.split("a-b-c", "-", 2));
// => [ 'a', 'b' ]
