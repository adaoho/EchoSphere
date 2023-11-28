const jwt = require("jsonwebtoken");
const brcyptjs = require("bcryptjs");
const SECRET = process.env.JWT_SECRET;

const hashPassword = (password) => {
  return brcyptjs.hashSync(password);
};

const comparePassword = (password, hash) => {
  return brcyptjs.compareSync(password, hash);
};

const signToken = (payload) => {
  return jwt.sign(payload, SECRET);
};

const verifyToken = (payload) => {
  return jwt.verify(payload, SECRET);
};

module.exports = {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken,
};
