// Time Complexity : O(N^2)
// Space Complexity : O(1)
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j< arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}


// Refactor ver.
// Time Complexity : O(N)
// Space Complexity : O(1)
function sumZeroRefactor(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--;
        else left++;
    }
}

console.log(sumZero([1,-1,2,3,4,5,6,-3]));
console.log(sumZeroRefactor([1,-1,2,3,4,5,6,-3]));