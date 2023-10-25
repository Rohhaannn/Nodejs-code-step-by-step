/*
//to switch or change the db
use e-comm
>switched to db e-comm

//insert data to db
db.products.insertOne({name:'m40', brand:'samsung', price:250, category:'mobile'})
{
  acknowledged: true,
  insertedId: ObjectId("6538af0db006846be509915b")
}

//update data in db
db.products.updateOne({name:"U10"},{$set: {price:300}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

db.products.updateOne({name:"U10"},{$set: {brand:"oppo"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//delete data from database
{
  acknowledged: true,
  deletedCount: 1
}



//Interview Questions: video 29

Q. what CRUD operations ?
Q. How to insert data into db & what is the command for insert ?
Q. How to update data into db & what is the command for update ?
Q. How to delete data into db & what is the command for delete ?


*/



