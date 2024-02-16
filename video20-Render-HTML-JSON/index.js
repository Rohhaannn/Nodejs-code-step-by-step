const express = require('express');
const app = express();

//from bard to confirm whether response has been send or not
// app.use((req, res, next) => {
//   if (!res.headersSent) {
//     next();
//   } else {
//     console.error('Cannot set headers after they are sent to the client');
//   }
// });

//creating Home page
app.get('/', (req, res)=>{
  res.send(`
  <a href=""> Home </a> || 
  <a href="/about"> About </a> || 
  <a href="/help"> Help </a> || 
  <a href="/other"> Other </a>

    <br>
    <h1>Welcome, to Home Page</h1>
    <textarea rows="7" cols="50"/>
  `);
})

// Creating about page: Another page for rendering html data
app.get('/about', (req, res)=>{
  res.send(`
  <a href="/"> Home </a> || 
  <a href="/about"> About </a> || 
  <a href="/help"> Help </a> || 
  <a href="/other"> Other </a>

    <h1> Welcome to About Page </h1>
    <br>
    <input type="text" placeholder="Username" value="${req.query.name}"/>
    <button> Click Me </button>
  
  `);
})

// Creating Help page : Another page for redering json data
app.get('/help',(req, res)=>{
  res.send(`
    <a href="/"> Home </a> || 
    <a href="/about"> About </a> || 
    <a href="/help"> Help </a> || 
    <a href="/other"> Other </a>

    <br><br>
    {
      name:'Ronak✨',
      email:'ronak@gmail.com'
    }
  `);
})

// Creating Help page : Another page for redering multiple json data
app.get('/other',(req, res)=>{
  res.send(`
    <a href="/"> Home </a> || 
    <a href="/about"> About </a> || 
    <a href="/help"> Help </a> || 
    <a href="/other"> Other </a>

    <br><br>
    [
      {
        name:'Rohan',
        email:'rohan@gmail.com'
      },
      {
        name:'stueart',
        email:'stueart@gmail.com'
      },
      {
        name:'Johnanson',
        email:'Johnanson@gmail.com'
      },
      {
        name:'Berry',
        email:'berry@gmail.com'
      },
    ]
  `);
})

app.listen(8080);
