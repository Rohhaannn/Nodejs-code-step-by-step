//In this video - Route-Level Middleware & middleware from seperate file

const express = require("express");
const app = express();

//Middleware Routing (Application Middleware)
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1> Please Enter your age </h1>");
  } else if (req.query.age < 18) {
    res.send("<h1> You are Under Aged, You Cannot Access </h1>");
  } else {
    next();
  }
};
app.use(reqFilter); // this is the way of using Application route


//routes
//this is the way of seperate using middleware on specific page.
app.get("/", reqFilter, (req, res) => {
  res.send("<h1> Welcome to Home Page </h1>");
});
/*
If you don't want to apply middleware in one of pages then (when in a same file):

1) remove "app.use(middleware-name);"
2) use middleware-name on specific route/page like shown on users page above
*/

app.get("/users", (req, res) => {
  res.send("<h1> This is Users Page </h1>");
});

app.listen(6300);

/*
Application-level Middleware gets applied on every page
Route-level Middleware gets applied on specific router or page


Route-level Middleware - Interview Questions:

Q. what is Application-level route ?
Ans: Middleware which gets applied on whole app/all pages automatically (by-default)

Q. What is Route-level Middleware ?
Ans: Middleware which gets applies on single or multiple routes.

Q. difference app-leve mdlw / route-level mdlw ?
Ans: App-level middleware gets applied globally where route-level middleware can be applied on single or multiple routes/pages

Q. How to apply middleware on single route ?
Q. How to create middleware in different file ?

*/