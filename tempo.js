// its nack name is swap-----------------------------------

let first= 5;
let second= 7;
console.log(first,second);
// kaj hobe na// this is wrong approach
// first=second;
// second=first;


// //approach= 1
// const tempo= first;
// first=second;
// second=tempo;
// console.log(first,second)

//approach= 2-------destructuring
[first,second]=[second,first];
console.log(first,second)