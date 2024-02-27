const express = require("express");
const reqFilter = require('./middleware')
const app = express();


//routes
app.get("/", reqFilter, (req, res) => {
  res.send("<h1> Welcome to Home Page </h1>");
});
app.get("/users", (req, res) => {
  res.send("<h1> This is Users Page </h1>");
});

app.listen(6400);