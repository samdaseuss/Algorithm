/** https://www.acmicpc.net/problem/1786 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = input[0];
const P = input[1];

function search(T,P) {
    let count = 0;
    let l = "";
    for(let i = 0; i < T.length; i++) {
        for(let j = 0; j < P.length; j++) {
            if (P[j] !== T[i+j]) break;
            if (j === P.length-1) {
                count++;
                l += `${i+1} `;
            }
        }
    }
    console.log(count);
    console.log(l);
}

search(T,P);
//console.log(search("ABC ABCDAB ABCDABCDABDE","ABCDABD"));