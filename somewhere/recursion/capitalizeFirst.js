/**
 * capitalizeFirst
 * Write a recursive function called 
 * capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */

function capitalizeFirst(array) {
    let arr = [];
    function helper(array) {
        if( array.length === 0) return;
        let s = array[0][0].toUpperCase() + array[0].slice(1);
        arr.push(s);
        helper(array.slice(1))
    }
    helper(array);
    return arr;
}

console.log(capitalizeFirst(['car']))
console.log(capitalizeFirst(['car', 'taco', 'banana'])); //  ['Car','Taco','Banana']