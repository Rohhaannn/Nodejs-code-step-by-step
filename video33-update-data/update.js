const dbConnect = require('./mongodb')

const updateData = async () => {
  let data = await dbConnect();

  // let result = await data.updateOne(
  //    condition
  //   {name:'U10'},

  //   the record going to be updated
  //   {
  //     $set:{name:'Y-10'}
  //   }
  // )
  // console.log(result)

  let result = await data.updateMany(
    {name:'Note-5'},{
      $set:{name:'Note Pro'}
    }
  )
  console.log(result)

}

updateData();



/* Interview Question:

Q. When you write updateOne then which record will get updated ?
=> Based on the condition, whichever record from the start will match the condition that record will get updated

*/