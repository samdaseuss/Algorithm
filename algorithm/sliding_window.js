/**
 *  sliding window
 */
// A naive solution
// Time Complexity : O(N^2)
function maxSubarraySum(arr, num) {
    if ( num > arr.length ) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for ( let j = 0; j < num; j++ ) temp += arr[i + j];
        if (temp > max) max = temp;
    }
    return max;
}
// [2,6,9,2,1,8,5,6,3]
// 1회전 : num = 5, max = null
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));

// Time Complexity : O(N)
function maxSubarraySUm(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) maxSum += arr[i];
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySUm([2,6,9,2,1,8,5,6,3],3))