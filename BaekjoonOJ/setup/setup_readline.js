import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    
});

let input = [];

rl.on( "line", function (line) {

    input.push(line); // 입력받은 여러줄, line
    // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
    
 }).on("close", function () {

     const len = input.length;
     for (
         let i = 0;
         i < len;
         i++ 
     ){
        // for문 안에 원하는 작업 입력
         console.log('출력 : ' + input[i]);
     }
 
     process.exit(); // 프로세스 종료
 
 });