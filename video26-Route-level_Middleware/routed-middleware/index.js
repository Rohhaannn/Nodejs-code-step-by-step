//when we have suppose 70-80 routes & we want to apply a middleware on 20-25 routes then we use following code

const express = require('express');
const app = express();
const reqFilter = require('./middleware');

const route = express.Router();
route.use(reqFilter);

app.get('/',(req, res)=>{
  res.send(' <h1> Welcome to home page </h1> ')
})
app.get('/users',(req, res)=>{
  res.send(' <h1> This is users page </h1> ')
})
app.get('/about',(req, res)=>{
  res.send(' <h1> This is about page </h1> ')
})

//route level middleware applies only on below pages not on above app.get pages
route.get('/contact',(req, res)=>{
  res.send(' <h1> This is Contact page </h1> ')
})
route.get('/info',(req, res)=>{
  res.send(' <h1> This is Information page </h1> ')
})

app.use('/', route);

app.listen(6600);