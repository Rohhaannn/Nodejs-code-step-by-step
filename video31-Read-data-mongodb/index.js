const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const database = "e-comm"
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

//1st method
// dbConnect().then((resp) => {
//   resp.find({name:'U10'}).toArray().then((data)=>{
//     console.log(data)
//   })
// })

//2nd Method
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data)
}

main();