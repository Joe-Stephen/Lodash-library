import _ from "lodash";

let result = _.forEach([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3], (value) =>
  console.log(value)
);

let result1 = _.forEach({ a: 1, b: 2 }, (value, key) =>
  console.log(`${key} : ${value}`)
);
