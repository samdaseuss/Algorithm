/**
 * 입력 값을 받아 해쉬 값을 생성합니다.
 * 
 * @param {string} key 키 값
 * @param {number} arrayLen 해쉬 길이
 * @return {number} 해쉬된 값
 */

function hash_ver1(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}


/**
 * 성능이 개선된 해쉬 함수
 * @param {string} key 키 값
 * @param {number} arrayLen 해쉬 길이 
 * @returns {number} 해쉬된 값
 */
function hash_ver2(key, arrayLen) {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
}