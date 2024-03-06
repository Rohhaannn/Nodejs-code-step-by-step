const dbConnect = require('./mongodb');

//1st Method
// dbConnect().then((resp) => {
//   resp.find().toArray().then((data) => {
//     console.log(data)
//   })
// })

//2nd Method
// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray()
//   console.log(data)
// }

// main();