
const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient; //=> Both are same syntax. this is an old one. above this is modern syntax

const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect()
  // let db = result.db('e-comm')
  let db = result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({}).toArray()
  console.log(response);
}

getData();


/* Interview Question

Q. Can we connect multiple database like this ?
Ans: YES. Create same connection with databse name & Collection name and you are done

*/