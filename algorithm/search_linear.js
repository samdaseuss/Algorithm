// indexOf
// includes
// find
// findIndex
function linearSearch(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) return i;
    }
    return -1;  
}

const result = linearSearch([1,2,3,4,5], 4);
console.log(result);