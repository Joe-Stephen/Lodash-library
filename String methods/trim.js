import _ from "lodash";

// Removes leading and trailing whitespace or specified characters from string.

_.trim("  abc  ");
// => 'abc'

_.trim("-_-abc-_-", "_-");
// => 'abc'

_.map(["  foo  ", "  bar  "], _.trim);
// => ['foo', 'bar']
