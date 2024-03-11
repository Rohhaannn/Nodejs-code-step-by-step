const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json()) //will convert data into json

app.post('/', async (req, resp)=>{
  // resp.send({name:'Ronak'})
  // console.log(req.body);

  let data = await dbConnect();
  let result = await data.insertOne(req.body) // data will come fro postman
  resp.send(result);
})

app.listen(6000)

/* Interview Question

Q. Why didnt we use body-parser ?
=> After 4.6 version of Express we have use "express.json()" to convert the data into Json format

Q. How do you get the body through req ?
=> body-parser => okay (bcz it was used before 4.6 version of express)
=> express.json() (used after 4.6 version of express)
if we hae written "express.json()" then we cannot use "req.body" in our code

*/