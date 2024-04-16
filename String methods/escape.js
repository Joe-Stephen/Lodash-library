import _ from "lodash";

// Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.

console.log(_.escape("fred, barney, & < > pebbles"));
// => 'fred, barney, &amp; &lt; &gt; pebbles'
