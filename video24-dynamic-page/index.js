const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

app.get("/profile", (_, res) => {
  const user = {
    name: "Ronak Sharma",
    email: "ronak@gmail.com",
    country: "India",
    skills: ['php','js','React']
  };
  res.render(`profile`, { user });
});

app.get("/login", (_, res) => {
  res.render(`login`);
});

app.listen(8080);

/* Interview Questions:




*/
