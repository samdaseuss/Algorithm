import { createInterface } from "readline";


const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    
});

let input = [];







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
            
        }
        
        process.exit();
});
