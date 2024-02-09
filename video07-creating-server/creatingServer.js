//to create basic server it is required to import http module like below
const http = require("http");

//this is the first syntax (Recommended)
// http.createServer((req, resp)=>{
  
//   resp.write("<h1> Hello this is Rohan </h1>");
//   resp.end();
// }).listen(4500);

/* what does "req" do?
  when you submit a form or send a parameter through  url, to access those inside node

  what does res do ?
  when we have to send response to the client
*/


//Another syntax
const dataControl = (req, res) => {
  res.write("<h1> This is testing with another syntax </h1>");
  res.end();
}

http.createServer(dataControl).listen(6500);

//normal funtction
// function test (a) {
//   return a*10;
// }
//arrow function
// const test = (a) => a*10;



/* Interview Questions : 
Q. how can we send function as parameter ?
Q. what are arrow functions ?
Q. what 'http' module do ?
http module handles the request & response of the server in node

*/
