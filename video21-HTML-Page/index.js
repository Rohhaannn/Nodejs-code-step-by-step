const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')
// console.log(publicPath);

app.use(express.static(publicPath))

app.listen(5000);

/*

Interview Question

Q.What is the use of path module ?
Ans: It helps to access your folder within a project

Q.What is the use of static method ?
Ans: load static content of the page

Q.can you directly apply css to the html files which is in the public folder ?
Ans: No.

*/