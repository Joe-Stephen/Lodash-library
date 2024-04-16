import _ from "lodash";

// Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.

console.log(_.padEnd("abc", 5, "*"));
// => 'abc**'
