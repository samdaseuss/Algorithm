// Time Complexity : O(N)
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) 
        if (arr[i] === val) return i;
    return -1;
}

console.log(search([1,2,3,4,5], 5));

// Refactor
// Binary Search
// Time Complexity : O(LogN)
function searchRefactor(array, value) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
        if (array[middle] < val) min = middle + 1;
        else if (array[middle] > val) max = middle - 1;
        else return middle;
    }
    return -1;
}

console.log(search([1,2,3,4,5], 3));