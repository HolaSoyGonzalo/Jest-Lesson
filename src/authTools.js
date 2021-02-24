const jwt = require("jsonwebtoken");

const verifyAccess = (token) =>
  new Promise((res, rej) =>
    jwt.verify(token, process.env.CVCESS_SECRET, (err, decodedToken) => {
      if (err) rej(err);
      res(decodedToken);
    })
  );

module.exports = { verifyAccess };
