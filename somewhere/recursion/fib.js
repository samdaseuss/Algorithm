/**
 * fib
 * Write a recursive function 
 * called fib which accepts a 
 * number and returns the nth 
 * number in the Fibonacci seq
 * uence. Recall that the Fibo
 * nacci sequence is the seque
 * nce of whole numbers 1, 1, 
 * 2, 3, 5, 8, ... which starts
 *  with 1 and 1, and where eve
 * ry number thereafter is equa
 * l to the sum of the previous
 * two numbers.
 */

function fib(number) {
    if (number < 2) return number;
    return fib(number-1) + fib(number-2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465