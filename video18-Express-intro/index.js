const express = require('express');
const app = express();

//get methods provide route

//creating home page 
app.get('', (req, res)=>{ // root page or home (by default)
  res.send('<h1> Hello, this is Home page </h1>');
})

//creating About page
app.get('/about', (req, res)=>{
  res.send('<h1> Hello, this is About page </h1>');
})

//creating Help page
app.get('/help', (req, res)=>{
  res.send('<h1> Hello, this is gonna be Help page </h1>');
})

//Contact page
app.get('/contact', (req, res)=>{
  res.send('<h1> Hello, Contact US page </h1>');
})

app.listen(5000);