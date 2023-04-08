/**
 * power
 * Write a function called power 
 * which accepts a base and an e
 * xponent. The function should 
 * return the power of the base 
 * to the exponent. This function
 *  should mimic the functionality
 *  of Math.pow()  - do not worry
 *  about negative bases and exponents.
 */

function power(n,m) {
    if (m === 0) return 1;
    return n * power(n,m-1);
}
console.log(power(2,10));