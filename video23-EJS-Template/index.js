// setting ejs be like
// app.set('view engine', 'ejs'); this view engine & ejs are first & second parameter. and this is only valid syntax

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.set("view engine", "ejs");

// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });

app.get("/profile", (_, resp) => {
  const user = { //this the way we can pass the data dynamically
    name:'Ronak Sharma',
    email:'ronak@gmail.com',
    country:'India'
  }
  resp.render(`profile`, {user});
});

// app.get("/home", (_, resp) => {
//   resp.sendFile(`${publicPath}/home.html`);
// });

// app.get("/about", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });

// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/error.html`);
// });

app.listen(4500);
