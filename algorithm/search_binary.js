function binarySearch(array, element) {
    let start = 0;
    let end = array.length -1;
    let middle = Math.floor((start + end) / 2);
    while(array[middle] !== element && start <= end) {
        if (element < array[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return array[middle] === element ? middle : -1;
}
const result = binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19],18);
console.log(result);