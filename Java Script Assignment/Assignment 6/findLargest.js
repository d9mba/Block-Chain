"use strict";

function find_largest(n) {
    let arr = [3,45,6,7,23,5,7,8];

    if(n > arr.length) {
        return "This index could not be found in the table, choose another index value!";
    }
    let value = -1;
    let arr1 = arr.sort((a, b) => b - a);

    for(let i in arr1) { // i is a string value
        if(Number(i) === n - 1) {
            value = arr1[i];
            break;
        }
    }
    return value;
}

var arr = find_largest(10); // Index not exist
console.log(arr);
var arr = find_largest(8); // 8th largest => 3
console.log(arr);
var arr = find_largest(5); // 5th largest => 7
console.log(arr);
var arr = find_largest(2); // 2nd largest => 23
console.log(arr);
var arr = find_largest(1); // 1st largest => 45
console.log(arr);