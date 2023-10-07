const express = require('express');
const app = express();

//from bard to confirm whether response has been send or not
app.use((req, res, next) => {
  if (!res.headersSent) {
    next();
  } else {
    console.error('Cannot set headers after they are sent to the client');
  }
});

//creating Simple Home page
app.get('',(req, res)=>{
  res.send('<h1>Welcome, to Home Page</h1>');
})

//creating about page- Rendering HTML data
app.get('/about',(req, res)=>{
  res.send(`
    <h1>Welcome, About US</h1>
    <input type="text" placeholder="User name"/>
    <button> Click Me </button>
  `);
})

//creating help page - Rendering JSON data
app.get('/help',(req, res)=>{
  res.send({
    name: 'Ronak',
    email: 'ronak@test.com'
  });
})

//creating other page - Rendering multiple objects (JSON data) by creating an array
app.get('/other',(req, res)=>{
  res.send([
      {
        name: 'Ronak',
        email: 'ronak@test.com'
      },
      {
        name: 'Stuti',
        email: 'Stuti@gmail.com'
      },
      {
        name: 'Anirban',
        email: 'Anirban@test.com'
      },
      {
        name: 'Raman',
        email: 'Raman@test.com'
      },
      {
        name: 'Dimple',
        email: 'Dimple@test.com'
      },
  ]);
})

app.listen(8080);
