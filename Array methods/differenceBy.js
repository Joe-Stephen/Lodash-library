import lodash from "lodash";

// This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value).
// Note: Unlike _.pullAllBy, this method returns a new array.

const array = [2, 3, 0, 5, 6, 7, 7, 18, 4];

let iter_greater = (value) => {
    if (value>5){return value}
//   return value > 5 ? value : undefined;
};

const result = lodash.differenceBy(array, [2, 0, 6, 8, 10], iter_greater);
console.log(result);
