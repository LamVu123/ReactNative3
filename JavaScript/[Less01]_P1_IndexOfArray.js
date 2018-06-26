

var array = [];

for (let index = 3; index < 10; index++) {
    array[index-3] = index; 
}

// 
var indexOfArr = function (array,value ){
     let count = 0;
     for (let i = 0; i < array.length; i++) {
         if  (value == array[i]) return i;
     }
     return -1;
}
//
console.log(indexOfArr(array,5));
