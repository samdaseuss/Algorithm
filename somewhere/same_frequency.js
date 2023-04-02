/**
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency. 
 * Given two positive integers, find out 
 * if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities: Time: O(N)
 * Sample Input:
 *      sameFrequency(182,281) // true
 *      sameFrequency(34,14) // false
 *      sameFrequency(3589578, 5879385) // true
 *      sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
    const arr1 = num1.toString().split("");
    const arr2 = num2.toString().split("");
    if(arr1.length !== arr2.length) return false;
    let counter1 = {};
    let counter2 = {};
    for (let key of arr1) counter1[key] = ( counter1[key] || 0) + 1;
    for (let key of arr2) counter2[key] = ( counter2[key] || 0) + 1;
    for (let i in counter1) {
        if(!(i in counter2)) return false;
        if(counter1[i] !== counter2[i]) return false;
    }
    return true
}
console.log(sameFrequency(213,321))