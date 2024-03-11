const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/', async (req, resp)=>{
  // console.log('server started')
  // resp.send({name:'Rohan'})

  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data)
  resp.send(data);
})

app.listen(5000);



/* Interview Question

Q. Can you pass body in get method ?
=> No

*/