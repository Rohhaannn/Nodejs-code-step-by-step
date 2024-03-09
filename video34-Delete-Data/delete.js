const dbConnect = require('./mongodb');

const deleteData = async () => {
  let data = await dbConnect();
  // let result = await data.deleteOne({name:'M-80'})
  // console.log(result)
  // if(result.acknowledged){
  //   console.log("record deleted")
  // }

  let result = await data.deleteMany({name:'Note Pro'})
  console.log(result)
  if(result.acknowledged){
    console.log("record deleted")
  }
}

deleteData();

/* Interview Question

Suppose, you deleting a data which is not present in the database, then how will you know that that has been deleted or it was never there ?

=> we can identify that on the label named deletedCount. if data was never there it will show 0 (zero), and if it has been deleted it will show the exact count

*/