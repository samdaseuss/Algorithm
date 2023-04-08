/**
    Frequency Counter / Multiple Pointers - areThereDuplicates
    Implement a function called, areThereDuplicates which 
    accepts a variable number of arguments, and checks wh
    ether there are any duplicates among the arguments pa
    ssed in.  You can solve this using the frequency coun
    ter pattern OR the multiple pointers pattern.

    Examples:
        areThereDuplicates(1, 2, 3) // false
        areThereDuplicates(1, 2, 2) // true 
        areThereDuplicates('a', 'b', 'c', 'a') // true 
    Restrictions:
        Time - O(n)
        Space - O(n)
    Bonus:
        Time - O(n log n)
        Space - O(1)
 */
// frequency counter ver.
function areThereDuplicates(...args) {
    const counter = {}
    const array = [...args];
    for (let i of array) counter[i] = ( counter[i] || 0 ) + 1;
    for (let i in counter) {
        if (counter[i] !== 1) return true;
    }
    return false;
}
// //areThereDuplicates 솔루션 (빈도 수 세기)
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }
// //areThereDuplicates 솔루션 (다중 포인터)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }
// //areThereDuplicates One Liner 솔루션
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));