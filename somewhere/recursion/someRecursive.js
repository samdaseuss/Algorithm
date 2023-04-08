/**
 * someRecursive
 * Write a recursive function called
 * someRecursive which accepts an ar
 * ray and a callback. The function 
 * returns true if a single value in
 * the array returns true when passed
 * to the callback.
 * Otherwise it returns false.
 */
const isOdd = val => val % 2 !== 0;
function someRecursive(array, isOdd) {
    if (array.length === 0) return false;
    if (isOdd(array[0])) return true;
    return someRecursive(array.slice(1), isOdd)
}

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));