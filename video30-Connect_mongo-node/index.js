const { MongoClient } = require("mongodb");
// const MongoClient = require('mongodb').MongoClient; // => Both are same syntax. this is an old one. above this is modern syntax
const url = "mongodb://localhost:27017";
const database = 'e-comm';
const client = new MongoClient(url); 

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();