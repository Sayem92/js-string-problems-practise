//const fibo [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 114]

/* 
fibo[4] = fibo[3] + fibo[2]
fibo[7] = fibo[6] + fibo[5]
fibo[14] = fibo[13] + fibo[12]
fibo[40] = fibo[41] + fibo[42]
fibo[487] = fibo[486] + fibo[485]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo=[0, 1];
for( let i = 2; i <= 20; i++){
    fibo[i]=fibo[i-1] + fibo[i-2];
}
console.log(fibo);