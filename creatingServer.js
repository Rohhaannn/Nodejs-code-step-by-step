// how t create a server

const http = require ('http');

// what is the use of http ?
// handles the http request & response in node js

//first syntax - recommended
// http.createServer((req, res)=>{
//   res.write("<h1> hello this is Rohan </h1>")
//   res.end();
// }).listen(4500);


//Another syntax
// const dataControl = (req, res) => {
//   res.write("<h1> hello this is Rohan. This testing is with another syntax </h1>")
//   res.end();
// } 

// http.createServer(dataControl).listen(4500);


