import lodash from "lodash";

// This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).
// Note: Unlike _.differenceBy, this method mutates array.

const array1 = [
  { x: 1, y: 5 },
  { x: 2, y: 6 },
  { x: 3, y: 7 },
  { x: 1, y: 8 },
];

const result = lodash.pullAllBy(
  array1,
  [
    { x: 1, y: 5 },
    { x: 3, y: 7 },
  ],
  "x" && "y"
);
console.log(result);
