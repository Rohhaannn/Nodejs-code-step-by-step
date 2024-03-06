const dbConnect = require('./mongodb')

const insert = async () => {
  const db= await dbConnect();
  
  //insert one record
  // const result = db.insertOne(
  //   {name:'Note-5', brand:'Vivo', price:5695, category:'Mobile'}
  // )

  //insert Many records
  const result = db.insertMany(
    [
      {name:'Note-5', brand:'Vivo', price:5695, category:'Mobile'},
      {name:'M-80', brand:'Vsamsung', price:8797, category:'Tab'},
      {name:'Y-78', brand:'Plus One', price:7654, category:'NoteMob'},
      {name:'Iphone Max Pro', brand:'apple', price:89784, category:'IPad'},
    ]
  )
}

insert();