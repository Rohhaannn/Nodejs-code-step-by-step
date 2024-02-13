let a = 20;
let b = 0;

// setTimeout(()=> {
//   b = 30;
// },2000);

let waitingData = new Promise ((resolve, reject)=>{
  setTimeout(()=> {
    resolve(30);
  },2000);
})

// console.log(a+b);

waitingData.then((data)=>{
  b = data;
  console.log(a+b);
})


/* 

what is Promise: Promise & aysnc-await is way of handling Async data in js. Lets talk about Promises

This is the standard way to handle drawbacks of Asynchronous Programming, we have to create a new Promise as shown in above code, then we put our setTimeout function inside that promise, and pass the data in "resolve()" which we want to update with a specific time limit. 

then below we have call that promise using ".then()" which takes a callback function & we assign & update our data in that "promiseName.then" function & print the final result.

*/

let a1 = 10;
let b1 = 0;

let waitingData2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(30);
  }, 2000);
})

waitingData2.then((data)=>{
  console.log("Final value: .",a1+data);
})
