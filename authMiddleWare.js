exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res
      .status(401)
      .send(
        `<h4>Hey your are not authenticated </h4> <a href="/login">login</a>`
      );
  }
};
exports.isAdmin = (req, res, next) => {
  console.log(req.user.isadmin);
  if (req.isAuthenticated() && req.user.isadmin) {
    next();
  } else {
    res.status(401).send(`<h4>Hey your are not an admin </h4`);
  }
};
