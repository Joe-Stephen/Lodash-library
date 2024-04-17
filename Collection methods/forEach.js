import _ from "lodash";

//Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

let result = _.forEach([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3], (value) =>
  console.log(value)
);

let result1 = _.forEach({ a: 1, b: 2 }, (value, key) =>
  console.log(`${key} : ${value}`)
);
