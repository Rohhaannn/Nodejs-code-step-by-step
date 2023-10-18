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

app.listen(8080);

/*
If you don't want to apply middleware in one of pages then (when in a same file):

1) remove "app.use(middleware-name);"
2) use middleware-name on specific route/page like shown on users page

*/

/* Route-level Middleware - Interview Questions:

Q. What is Route-level Middleware ?
Ans: Middleware which gets applies on single or multiple routes.

Q. what is Application-level route ?
Ans: Middleware which gets applied on whole app automatically (by-default)

Q. difference app-leve mdlw / route-level mdlw ?
Ans: App-level middleware gets applied globally where route-level middleware can be applied on single or multiple routes/pages

Q. How to apply middleware on single route ?
Q. How to create middleware in different file ?


*/