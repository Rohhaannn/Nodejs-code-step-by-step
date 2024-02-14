const express = require('express');
const app = express();

//get methods provide route

//creating home page 
app.get('',(req, res)=>{
  res.send('<h1> Hello this is Home page </h1>')
})

//creating about page
app.get('/about',(req, res)=>{
  res.send('<h1> Hello this is About page </h1>')
})

//creating Help page
app.get('/help',(req, res)=>{
  res.send('<h1> Help page </h1>')
})

app.listen(5000);