const checkPatron = (req, res, next) => {
  const { patronId } = req.body;
  const { patronData } = req;
  if (!patronId || !patronData || patronData._id !== patronId) {
    return res.status(403).send({ errorMsg: "Unauthorized" });
  }

  next();
};

module.exports = { checkPatron };
