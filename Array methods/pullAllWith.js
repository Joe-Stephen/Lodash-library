import lodash from "lodash";

// This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).
// Note: Unlike _.differenceWith, this method mutates array.

const array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

const result = lodash.pullAllWith(array, [{ x: 3, y: 4 }], lodash.isEqual);
console.log(result);
