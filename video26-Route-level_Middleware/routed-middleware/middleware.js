module.exports =  reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1> Please Enter your age </h1>");
  } else if (req.query.age < 18) {
    res.send("<h1> You are Under Aged, You Cannot Access </h1>");
  } else {
    next();
  }
};
