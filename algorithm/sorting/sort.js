// Telling JavaScript how to sort
function numberCompare(num1, num2) {
    return num1 - num2; // - num1 반환/ = / + num2 반환
}
console.log([6,4,15,10].sort(numberCompare));

// string length
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));

// ES5
function swap1(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr
}
console.log(swap1([1,3,2], 0,2))
// ES2015
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    return arr
}
console.log(swap2([1,3,2], 0,2))