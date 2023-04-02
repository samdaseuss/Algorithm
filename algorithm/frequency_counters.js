// Time Complexity : O(N^2)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;
        arr2.splice(correctIndex, 1); // remove
    }
    return true;
}

// array example
// Time Complexity : O(N)
function samesame(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    // 각 값이 해당 배열에서 몇 번 나타나는지 알려주는 객체를 컴파일 하는 작업
    let frequencyCounter1 = {}; // 값의 빈도를 담을 객체
    let frequencyCounter2 = {};
    for (let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    for (let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    for (let key in frequencyCounter1) { // key = value
        if(!(key ** 2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true;
}

// string example
// Time Complexity : O(N)
function validAnagram1(str1, str2) {
    if(str1.length !== str2.length) return false;
    let counter1 = {};
    let counter2 = {};
    for (let index of str1.split("")) counter1[index] = (counter1[index] || 0) + 1;
    for (let index of str2.split("")) counter2[index] = (counter2[index] || 0) + 1;
    for (let key in counter1) {
        if (!(key in counter2)) return false;
        if (counter2[key] !== counter1[key]) return false;
    }
    return true;
}

// Time Complexity : O(N)
function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false;
    let counter = {};
    for (let i = 0; i < str1.length; i++ ) {
        let letter = str1[i];
        counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!counter[letter]) return false;
        else counter[letter] -= 1;
    }
    return true;
}

console.log(validAnagram2('', ''))// true
console.log(validAnagram2('aaz', 'zza')) // false
console.log(validAnagram2('anagram', 'nagaram')) // true
console.log(validAnagram2("rat","car")) // false) // false
console.log(validAnagram2('awesome', 'awesom')) // false
console.log(validAnagram2('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram2('qwerty', 'qeywrt')) // true
console.log(validAnagram2('texttwisttime', 'timetwisttext')) // true