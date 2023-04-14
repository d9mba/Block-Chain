

"use strict";

let armstrong = (value) => {
    let n = value.toString();
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += Math.pow(Number(n[i]), 3);
    }
    if(sum === value) {
        console.log(`=====>>>${ value } is a Armstrong number.`);
    } else {
        console.log(`${ value } is not a Armstrong number.`);
    }
}

let armstrong_range = (n1, n2) => {
    for(let i = n1; i <= n2; i++) {
        let n = i.toString();
        let sum = 0;
        for(let j = 0; j < n.length; j++) {
            sum += Math.pow(Number(n[j]), 3);
        }
        if(sum === i) {
            console.log(`=====>>>${ i } is a Armstrong number.`);
        } else {
            console.log(`${ i } is not a Armstrong number.`);
        }
    }
}

armstrong(0);
armstrong(1);
armstrong(2);
armstrong(153);
armstrong(170);
armstrong(370);
armstrong(390);
armstrong(371);
armstrong(400);
armstrong(407);

console.log("==================================");

armstrong_range(0, 1000);