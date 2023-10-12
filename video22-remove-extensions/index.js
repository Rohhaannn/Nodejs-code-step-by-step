const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

app.get('',(_, res)=>{
  res.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(_, res)=>{
  res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_, res)=>{
  res.sendFile(`${publicPath}/help.html`)
})

app.get('*',(_, res)=>{
  res.sendFile(`${publicPath}/notFound.html`)
})

app.listen(8000);



/* Interview Questions:

Q. What is 404 page ?
=> 404 page is an error page or special kind of page when user enters a page to access which not exist at that time this page will showed up containing text "Error 404: Page not Found"

Q. how to remove extensions from URL's to access / while accessing a web page ?
=> using sendFile in get method

Q. In Get Method how do you load a file ? 
=> using sendFile Method

*/