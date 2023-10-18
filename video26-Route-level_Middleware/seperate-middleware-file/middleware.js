//middleware in separete file (Route-level Middleware)

module.exports = reqFilter = (req, res, next)=>{
  // console.log('reqFilter');
  if (!req.query.age){
    res.send("<h1> Please provide your age! </h1>")
  } else if (req.query.age < 18){
    res.send(" <h1> 'users < 18' cannot access this page! </h1> ")
  } else {
    next();
  }
}