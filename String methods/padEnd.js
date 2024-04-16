import _ from "lodash";

// Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

console.log(_.padEnd("abc", 5, "*"));
// => 'abc**'
