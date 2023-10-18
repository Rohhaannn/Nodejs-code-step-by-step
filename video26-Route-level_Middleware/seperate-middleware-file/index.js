const express = require('express');
const reqFilter = require('./middleware');
const app = express();

//middleware code was here, Now in a seperate file


//app.use(reqFilter);


//pages - routes (Application-level Routes)
app.get('/',(req, res)=>{
  res.send(' <h1> Welcome to home page </h1> ')
})

app.get('/users',reqFilter,(req, res)=>{
  res.send(' <h1> This is users page </h1> ')
})

app.get('/about',(req, res)=>{
  res.send(' <h1> This is about page </h1> ')
})


//when we have suppose 70-80 routes & we want to apply a middleware on 20-25 routes then we use following code

const route = express.Router();

route.use(reqFilter);

route.get('/contact',(req, res)=>{
  res.send(' <h1> This is Contact page </h1> ')
})

route.get('/info',(req, res)=>{
  res.send(' <h1> This is Information page </h1> ')
})

app.use('/', route);

app.listen(8080);

/* */
