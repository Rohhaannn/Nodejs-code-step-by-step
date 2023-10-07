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

// interview question
// Node js is async language

/*

Async - 
first command is run
second command is run
third cmnd has cmplex data which will take 3-4 mins to run node will run this cmnd but will not wait for outout.
it will continue to run next cmnds. when 3rd cmnd gets run & got output, it will automatically get displayed
4th cmnd
5th cmnd

*/


