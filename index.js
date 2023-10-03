

// var x = '20';
// if (x === 20){
//   console.log("matched");
// } else {
//   console.log("not matched");
// }
// "==" value match | "===" types match

//================================================================================
// var x = '20'
// for(i=1;i<=10;i++) {
//   console.log(i);
// }

//=================================================================================

const app = require('./app')
var x = '20'
// const arr = [2,4,7,1,3,8,3];
// console.log(arr[4])

// console.log(app)
// console.log(app.x)
// console.log(app.y)

const arr = [2,4,7,1,3,8,3];
// arr.filter((item)=>{
//   console.log(item)
// })

let result = arr.filter ((item)=>{
  // return item === 3;
  return item > 3;
})
console.log(result)