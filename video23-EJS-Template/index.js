const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

app.set('view engine','ejs');

// app.get('',(_, res)=>{
//   res.sendFile(`${publicPath}/home.html`);
// })

// app.get('/about',(_, res)=>{
//   res.sendFile(`${publicPath}/about.html`);
// })

// app.get('/help',(_, res)=>{
//   res.sendFile(`${publicPath}/help.html`);
// })

// app.get('*',(_, res)=>{
//   res.sendFile(`${publicPath}/notFound.html`);
// })

app.get('/profile',(_, res)=>{
  const user = {
    name: 'Ronak Sharma',
    email: 'ronak@gmail.com',
    country: 'India',
  }
  res.render(`profile`,{user})
});

app.listen(8000);


/* Interview Questions:




*/