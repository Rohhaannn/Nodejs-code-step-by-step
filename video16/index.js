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

what is Promise: Promise is way of handling Async data in js.

This is the standard way to handle drawbacks of Asynchronous Programming, we have to create a new Promise as shown in above code, then we put our setTimeout function inside of that promise, and pass the data in "resolve()" which we want to update with a speciic time limit. 

then below we have call that promise using ".then" & we assign & update our data in that "promiseName.then" function & print the final result.


*/