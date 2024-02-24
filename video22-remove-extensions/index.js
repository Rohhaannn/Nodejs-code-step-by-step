const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

app.get('', (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`)
})

app.get('/home', (_, resp) => {
  resp.sendFile(`${publicPath}/home.html`)
})

app.get('/about', (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`)
})

app.get('*', (_, resp) => {
  resp.sendFile(`${publicPath}/error.html`)
})

app.listen(4500);



/* Interview Questions:

Q. what is 404 page ? how do we make them ?
=> 404 page is an error page or special kind of page when user enters a page to access which not exist at that time this page will showed up containing text "Error 404: Page not Found"

Q. how to remove extensions from URL's to access / while accessing a web page ? OR
Q. Q. How to remove extensions from URL ?
=> res.sendFile(`${publicPath}/help.html`);

Q. How do you load a file in Get method
=> using sendFile()

*/