import _ from "lodash";

//This method is like _.reduce except that it iterates over elements of collection from right to left.

let result = _.reduceRight(
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ],
  (flattened, other) => {
    return flattened.concat(other);
  },
  []
);

console.log(result);
