/*

Please enter a MongoDB connection string (Default: mongodb://localhost/):

Current Mongosh Log ID: 65e6abd163256a80b1dd4fec
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1
Using MongoDB:          7.0.4
Using Mongosh:          2.1.1
mongosh 2.1.5 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-03-05T09:40:53.667+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
MatrixDB        72.00 KiB
MoviesGallery   72.00 KiB
SportsDetails  224.00 KiB
admin           40.00 KiB
config          60.00 KiB
local           96.00 KiB
test            40.00 KiB
test> use e-comm
switched to db e-comm
e-comm> de.createCollection('products')
ReferenceError: de is not defined
e-comm> db.createCollection('products')
{ ok: 1 }
e-comm> db.products.insertOne({name:"M-40", brand:"samsung", price:3500, category:"mobile"})
{
  acknowledged: true,
  insertedId: ObjectId('65e6bb6163256a80b1dd4fed')
}
e-comm> db.products.insertOne({name:"I Phone Max pro", brand:"apple", price:54500, category:"mobile"})
{
  acknowledged: true,
  insertedId: ObjectId('65e6bba063256a80b1dd4fee')
}
e-comm> db.products.insertOne({name:"U10", brand:"vivo", price:5400, category:"mobile"})
{
  acknowledged: true,
  insertedId: ObjectId('65e6bbeb63256a80b1dd4fef')
}

e-comm> show collections
products
e-comm> db.products.find()
[
  {
    _id: ObjectId('65e6bb6163256a80b1dd4fed'),
    name: 'M-40',
    brand: 'samsung',
    price: 3500,
    category: 'mobile'
  },
  {
    _id: ObjectId('65e6bba063256a80b1dd4fee'),
    name: 'I Phone Max pro',
    brand: 'apple',
    price: 54500,
    category: 'mobile'
  },
  {
    _id: ObjectId('65e6bbeb63256a80b1dd4fef'),
    name: 'U10',
    brand: 'vivo',
    price: 5400,
    category: 'mobile'
  }
]
e-comm> db.products.updateOne({name:'U10'},{$set:{brand:'Oppo'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
e-comm> db.products.deleteOne({brand:"apple"})
{ acknowledged: true, deletedCount: 1 }
e-comm>


//Interview Questions: video 29

Q. what CRUD operations ?
=> Create, Read, Update & delete

Q. How to insert data into db & what is the command for insert ?
Q. How to update data into db & what is the command for update ?
Q. How to delete data into db & what is the command for delete ?


*/



