const dbConnect = require('./mongodb')

const insert = async () => {
  const db= await dbConnect();
  
  //insert one record
  // const result = await db.insertOne(
  //   {name:'Note-5', brand:'Vivo', price:5695, category:'Mobile'}
  // )

  //insert Many records
  const result = await db.insertMany(
    [
      {name:'Note-5', brand:'Vivo', price:5695, category:'Mobile'},
      {name:'M-80', brand:'Vsamsung', price:8797, category:'Tab'},
      {name:'Y-78', brand:'Plus One', price:7654, category:'NoteMob'},
      {name:'Iphone Max Pro', brand:'apple', price:89784, category:'IPad'},
    ]
  )

  if(result.acknowledged) {
    console.log("Data Inserted")
  }
}

insert();

/*
Intrview questions - video 32
How to insert multiple records ?

video 31: 
while reading the data , how to apply where condition ?
=> resp.find({name:'IPhone'}).toArray().then((data) => {

  name:'IPhone'

*/