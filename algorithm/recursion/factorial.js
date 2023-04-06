function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1);
}
const f = factorial(3);
console.log(f);