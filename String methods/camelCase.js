import _ from "lodash";

// Converts string to camel case.

_.camelCase("Foo Bar");
// => 'fooBar'

_.camelCase("--foo-bar--");
// => 'fooBar'

_.camelCase("__FOO_BAR__");
// => 'fooBar'
