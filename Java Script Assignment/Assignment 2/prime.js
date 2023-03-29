"use strict";
let factorial = (value) => {
    let n = Number(value);
    if(n === 0) 
        return 1;
    else if(isNaN(n))
        return "Invalid input value!";
    else if(n < 0)
        return "Not exist";
    else 
        return n * factorial(n - 1);
}

let prime = (n1, n2) => {
    if(n1 === 0 || n2 === 0) {
        console.log("Type a value greater than 0!!");
        return;
    }

    let prime_values = [];
    let is_prime = false;
    let nb = 0, d = 0, count = 1; 
        
	for (let i = n1; i <= n2; i++) { 
		is_prime = true; 
		d = 2; 
		while (is_prime && d * d <= i) {
            if (i %d === 0) 
				is_prime = false; 
			else d++; 
        }
			
		if (is_prime === true) { 
			nb++; 
			// console.log(`The prime number ${ count } = ${ i }`); 
            prime_values.push(i);
			count++; 
		} 
	} 
    prime_values.map((facto) => factorial(facto))
                .forEach((facto, prime_index) => console.log(`Prime number ${ prime_values[prime_index] }! = ${ facto }`));
	// console.log(`There are ${ nb } prime numbers between ${ n1 } and ${ n2 }`);
}

prime(1, 100);

