const checkPatronBodyId = (req, res, next) => {
  const { patronId } = req.body;
  const { patronData } = req;
  if (!patronId || !patronData || patronData._id !== patronId) {
    return res.status(403).send({ errorMsg: "Unauthorized" });
  }

  next();
};

const checkPatronParamsId = (req, res, next) => {
  const { patronData } = req;
  const { patronId } = req.params;
  if (!patronId || !patronData || patronData._id !== patronId) {
    return res.status(403).send({ errorMsg: "Unauthorized" });
  }

  next();
};

module.exports = { checkPatronBodyId, checkPatronParamsId };
