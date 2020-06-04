const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader === "undefined") {
    return res.status(403).send({ errorMsg: "Unauthorized" });
  } else {
    const bearerToken = bearerHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(bearerToken, process.env.TOKEN_SECRET);
      req.patronData = decoded;
      next();
    } catch (err) {
      return res.status(403).send({ errorMsg: "Unauthorized" });
    }
  }
};

module.exports = { verifyToken };
