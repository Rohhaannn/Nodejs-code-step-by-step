const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.listen(4500);

/* Interview Questions :

what is the use of Path Module?
=> it helps access folder within project

what is the use of static method ?
=> It loads static pages or static content


In this situation, can you directly apply external css to the html files if css & html files both present in the same folder ?
=> No. bcz our path comes through nodejs file that why it cannot get applied directly

*/