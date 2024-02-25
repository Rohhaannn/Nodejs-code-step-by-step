const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");


app.get("/profile", (_, resp) => {
  const user = { //this the way we can pass the data dynamically
    name:'Ronak Sharma',
    email:'ronak@gmail.com',
    country:'India',
    skills:['JavaScript', 'React', 'Node']
  }
  resp.render(`profile`, {user});
});

app.get('/login', (_, resp) => {
  resp.render('login');
})


app.listen(4500);
