const express = require('express');
const app = express();

//Middleware code in same file (Application level)
const reqFilter = (req, res, next) => {
  //console.log("reqFilter"); // for this to print on console middleware code has to be written before routes always
  //next(); //without this browser window will keeps on loding

  if (!req.query.age) {
    res.send('<h1> Please provid age : </h1>')
  } else if (req.query.age < 18) {
    res.send(" <h1> 'users < 18' cannot access this page!! </h1>")
  } else {
    next();
  }
  
}
app.use(reqFilter);

//normal routes
app.get("/",(req, res)=>{
  res.send('<h1> Welcome to Home page </h1>');
})

app.get("/users",(req, res)=>{
  res.send('<h1> This is Users Page </h1>');
})


app.listen(5500);


/* Interview Questions:

Video 25 Express js Middleware

Q. what are middleware ?
=> these are functions, used with routes, using which we can access the request & response and can modify them if required for authentication purpose.

Q. how to make middelware ?

Q. How to apply middleware on routes ?

Q. Types of middleware ?
=> Application-level middleware (we have used above)
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware

*/