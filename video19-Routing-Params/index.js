/* 
This is a Simple example of getting data from browser

*/

const express = require("express");
const app = express();

app.get('', (req, res)  =>{
  // console.log("data sent by browser =>>>", req.query)
  console.log("data sent by browser =>>>", req.query.name)
  // res.send('Welcome, this is a demo page');
  res.send('Welcome, '+ req.query.name);
})

app.listen(6500);

/* Output:

data sent by browser =>>> Rohan
data sent by browser =>>> peter
data sent by browser =>>> Ronak

*/