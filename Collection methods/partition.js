import _ from "lodash";

//This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.

let result = _.partition(
  [
    { user: "Joe", age: 48, active: true },
    { user: "barney", age: 34, active: false },
    { user: "fred", age: 40, active: false },
    { user: "Naz", age: 36, active: true },
  ],
  (o) => o.active
);

console.log(result);
