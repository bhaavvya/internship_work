const Users = require('../models/userSchema');
const jwt = require('jsonwebtoken'); // You need to import jwt

const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    res.status(401).send("No token");
  } else {
    try {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await Users.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });
      if (!rootUser) {
        res.status(401).send("User Not Found");
      } else {
        // Call next() here to continue to the next middleware or route handler
        next();
      }
    } catch (error) {
      res.status(401).send("Invalid Token");
    }
  }
};

module.exports = authenticate;
