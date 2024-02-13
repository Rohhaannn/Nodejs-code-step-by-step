console.log("starting exe")
console.log("logic one")
console.log("logic two")
console.log("Complete task")

//=======================================================================

console.log('start exe');

console.log('logic exe...');

setTimeout(()=>{
  console.log('logic exe...');
},2000)

console.log('complete exe');

//=========================================================================

//there is darwback in this
//suppose:

let a = 10;
let b = 0;

setTimeout(()=>{
  b = 20;
  // console.log(b)
}, 2000);

console.log("Addition: ",a+b)

/*actual value we should've get is 30 but will get output as 10. when we assign a = 10 & b = 0, that statement run first thats y we get answer as 10, but the setTimeout function runs after 2 seconds value of b gets updated but never gets considered in calculation */

//=====================================================

let a1 = 10;
let b1 = 10;

setTimeout(()=>{
  b1 = 30;
  console.log("Updated value of b: ",b1)
}, 2000);

let addition = a1+b1;
console.log("Addition: ",addition)

setTimeout(()=>{
  console.log("Revised addition: ",a1+b1);
}, 3000)


/* Interview Questions : 

What are the drawbacks of asynchronous programming ?

let a = 10;
let b = 0;

setTimeout(()=>{
  b = 20;
  // console.log(b)
}, 2000);

console.log("Addition: ",a+b)

actual value we should've get is 30 but will get output as 10. when we assign a = 10 & b = 0, that statement run first thats y we get answer as 10, but the setTimeout function runs after 2 seconds value of b gets updated but never gets considered in calculation 

*/