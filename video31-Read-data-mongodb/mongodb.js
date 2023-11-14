const { MongoClient, ConnectionClosedEvent } = require("mongodb");
// const MongoClient = require('mongodb').MongoClient; // => Both are same syntax. this is an old one. above this is modern syntax
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url); 

async function dbConnect() {
  
  let result = await client.connect();
  let db = result.db(database);
  return db.collection('products');
}

module.exports = dbConnect;