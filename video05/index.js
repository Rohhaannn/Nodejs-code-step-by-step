// var x = 20;
// if(x == 20) {
//   console.log("matched")
// }

//=====================================================

// var x = '20';
// if(x === 20) {
//   console.log("matched")
// } else {
//   console.log("not matched")
// }

//=================================================

// for (i=0; i<=10; i++) {
//   console.log(i);
// }

//===============================================

// const arr=[5,5,9,6,5,4,7,3,2,5];
// console.log(arr);
// console.log(arr[4]);

//==============================================

// import {x,y} from '../video-5/app';

// const app = require('./app');

// console.log(app.x)
// console.log(app.y)
// console.log(app.z)


/* interview question

use filter function ?

*/

const arr4 = [2,3,6,5,7,8,3];

// const result = arr4.filter((item)=>{
//   return item === 3
// })
// console.log(result)

const result = arr4.filter((item)=>{
  return item > 3
})
console.log(result)
