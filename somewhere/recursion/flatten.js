/**
 * flatten
 * Write a recursive function called flatten 
 * which accepts an array of arrays and retu
 * rns a new array with all values flattened.
 */

function flatten(oldArray) {
    let newArray = []
    for(let i = 0; i < oldArray.length; i++) {
        if (Array.isArray(oldArray[i])) newArray = newArray.concat(flatten(oldArray[i]))
        else newArray.push(oldArray[i]);
    }
    return newArray
}

console.log(flatten([1,2,3,4,5]));
console.log(flatten([1, 2, 3, [4, 5] ])); // [1,2,3,4,5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1,2,3,4,5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));