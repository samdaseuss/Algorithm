import { createInterface } from "readline";


const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    
});

let input = [];

/**
 * $ 문제 | 백준 1920번
 * 
 *  N개의 정수 A[1], A[2], …, A[N]이 주어져 있을
 *  때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그
 *  램을 작성하시오.
 * 
 * 
 * $ 입력
 * 
 * 첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다.
 * 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 
 * 주어진다. 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주
 * 어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들
 * 이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는
 *  -231 보다 크거나 같고 231보다 작다.
 * 
 * $ 출력 
 * 
 * M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않
 * 으면 0을 출력한다.
 * 
 */

let A = ['1','5','6','3','2'];


function getString(str) {

    if(str.length > 1) {

        const array = str.split(' ');
        let temp = [];

        for (
            let i = 0; 
            i < array.length; 
            i++
        ){
            for (
                let j=0;
                j < A.length; 
                j++
            ){
                if( array[i] === A[j]) temp.push(i);
            }
        }

        let temp2 = [];
        let count = 0;

        for (
            let i = 0;
            i < array.length;
            i++
        ){
            if (i === temp[count]) {
                temp2.push('1');
                count++;
            } else {
                temp2.push('0');
            }

        }

        return temp2.join(' ');
    }

    for (
        let i = 0;
        i < A.length;
        i++
    ){
        if( A[i] === str) return '1';
    }

    return '0';
}

rl.on( 
        "line",
        line => input.push(line)
    ).on(
        "close",
        () => {
            const len = input.length;
            
            for (
                let i = 0;
                i < len;
                i++ 
            ){
                getString(input[i]);
            }
            
            process.exit();
    });
