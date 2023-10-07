/* 
This is a Simple example of getting data from browser

*/

const express = require("express");
const app = express();

app.get('', (req, res)  =>{
  // console.log("data sent by browser =>>>", req.query)
  console.log("data sent by browser =>>>", req.query.name)
  res.send('hello this is a demo page');
})

app.listen(6500);