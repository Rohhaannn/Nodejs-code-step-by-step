// console.log('start exe');

// console.log('logic exe...');

// setTimeout(()=>{
//   console.log('logic exe...');
// },2000)

// console.log('complete exe');

//=========================================================================

//there is darwback in this
//suppose:

let a = 10;
let b = 0;

setTimeout(()=>{
  b=20;
  // console.log(b);
},2000);

console.log(a+b);

/*actual value we should've get is 30 but will get output as 10. when we assign a = 10 & b = 0, that statement got run first thats  we get answer as 10, but the setTimeout function runs after 2 seconds value of b gets updated but never gets considered in calculation */