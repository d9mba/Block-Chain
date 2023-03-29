"use strict";
let Triangle = (n) => {
    for(let i = 1, c = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            console.log(c + " ");
            c++
        }
        console.log("\n");
    }
}
Triangle(4);
