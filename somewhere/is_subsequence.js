/**
 * Multiple Pointers - isSubsequence
 * Write a function called isSubsequ
 * ence which takes in two strings a
 * nd checks whether the characters 
 * in the first string form a subseq
 * uence of the characters in the se
 * cond string. In other words, the 
 * function should check whether the
 *  characters in the first string app
 * ear somewhere in the second string,
 *  without their order changing.
 * Your solution MUST have AT LEAST t
 * he following complexities:
 * Time Complexity - O(N + M)
 * Space Complexity - O(1)
 */
// 반복
function isSubsequence(str1, str2) {
    if (!str1) return true;
    let i = 0, j = 0;
    while(j < str2.length) {
        str1[i] === str2[j] && i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// 재귀
function isSubsequence(str1, str2) {
    if (str1.lensgth === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1)) 
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
