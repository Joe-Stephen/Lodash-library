import _ from "lodash";

// Checks if string starts with the given target string.

console.log(_.startsWith("abc", "a"));
// => true

console.log(_.startsWith("abc", "b"));
// => false

console.log(_.startsWith("", "a"));
// => false

console.log(_.startsWith("", ""));
// => true
