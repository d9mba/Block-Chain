"use strict";

function computeDash(input) {
    let str = "";
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j <= i + 1; j ++)  {
            if(input[i] % 2 === 0 && input[j] % 2 === 0 && i < input.length - 1) {
                str += input[i] + "-";
            } else {
                str += input[i];
            }
        }
    }  

    return str;
}

var str = computeDash("025468");
console.log(str);
var str = computeDash("85067426");
console.log(str);
var str = computeDash("12678102964201");
console.log(str);
