/**
 * 입력 값을 받아 해쉬 값을 생성합니다.
 * 
 * @param {string} key 키 값
 * @param {number} arrayLen 해쉬 길이
 * @return {number} 해쉬된 값
 */

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}