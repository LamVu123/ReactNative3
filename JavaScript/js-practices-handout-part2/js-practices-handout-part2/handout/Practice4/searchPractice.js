'use strict'
var arr = [4, 5, 6, 7, 8, 9];



function binarySearch(input, target) {
  let arrObj = [];
  input.reduce(function (acc, cur, i) {

    let obj1 =
    {
      index: i,
      value: cur
    }
    acc[i] = input[i];
    arrObj.push(obj1);
    return acc;
  }, {});

  let indexOfTarget = arrObj.filter((item) => {
    return (item.value == target)
  })
return indexOfTarget.length()<0 ? -1: indexOfTarget[0].index;
//return indexOfTarget[0].index;
}
console.log(binarySearch(arr,10));
module.exports = binarySearch