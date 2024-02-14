
// This is a Simple example of getting data from browser


const express = require("express");
const app = express();

/* 
quick notes :

request (req) & response (res) used to interact between server & client

whenever I have to send or request some data, from the client browser, it will come into req paramerter. (jo bhi data client se aayega woh 'req' parameter mei store hoga)

whatever data we are sending, we are sending it through 'res' parameter (jo bhi data hum send kr rahe hai, woh 'res' ke through send krte hai)

*/

app.get('', (req, res)  =>{
  console.log("data sent by browser =>>>", req.query.name)
  res.send('Welcome, '+ req.query.name); // this will going to print on browser
})

app.listen(6500);

/* Output:

data sent by browser =>>> Rohan
data sent by browser =>>> peter
data sent by browser =>>> Ronak

*/