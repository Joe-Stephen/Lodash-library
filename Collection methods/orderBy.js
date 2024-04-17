import _ from "lodash";

//This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.

let result = _.orderBy(
  [
    { user: "fred", age: 48 },
    { user: "barney", age: 34 },
    { user: "fred", age: 40 },
    { user: "barney", age: 36 },
  ],
['user', 'age'], ['asc', 'desc']
);

console.log(result);
