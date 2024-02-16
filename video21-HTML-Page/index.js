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


can you directly apply css to the html files which is in the html folder ?
=> No. bcz our path comes through nodejs file that why it canno get applied directly

*/