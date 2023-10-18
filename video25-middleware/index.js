const express = require('express');
const app = express();

//middleware in same file (Application-level Middleware)
const reqFilter = (req, res, next)=>{
  // console.log('reqFilter');
  if (!req.query.age){
    res.send("<h1> Please provide your age! </h1>")
  } else if (req.query.age < 18){
    res.send(" <h1> 'users < 18' cannot access this page! </h1> ")
  } else {
    next();
  }
}

app.use(reqFilter);


//pages - routes (Application-level Routes)
app.get('/',(req, res)=>{
  res.send(' <h1> Welcome to home page </h1> ')
})
app.get('/users',(req, res)=>{
  res.send(' <h1> This is users page </h1> ')
})

app.listen(8080);

/* Interview Questions:

Q. What is middleware ?
Ans: When we have to filter the responses or Autheticate the responses that time we have to apply middleware.

Q. How to make middleware ?
Q. How to apply middleware on routes ?
Q. Types of middleware ?


*/