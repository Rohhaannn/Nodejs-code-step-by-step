const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');


app.set('view engine','ejs');

app.get('/profile',(_, res)=>{
  const user = {
    name: 'Ronak Sharma',
    email: 'ronak@gmail.com',
    country: 'India',
  }
  res.render(`profile`,{user})
});

app.listen(8000);


/* Interview Questions:




*/