import lodash from "lodash";

//This method is like _.zipObject except that it supports property paths.

const result = lodash.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
console.log(JSON.stringify(result));
