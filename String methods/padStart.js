import _ from "lodash";

// Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.

console.log(_.padStart("abc", 5, "*"));
// => '**abc'
