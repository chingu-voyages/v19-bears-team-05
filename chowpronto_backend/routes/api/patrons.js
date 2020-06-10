const express = require("express");
const router = express.Router();
const patronsControllers = require("../../controllers/patrons-controller");
const { verifyToken } = require("../../middleware/verifyToken");
const { checkPatronParamsId } = require("../../middleware/checkPatron");

router.post("/signup", patronsControllers.signup);
router.post("/login", patronsControllers.login);
router.delete(
  "/profile/:patronId",
  verifyToken,
  checkPatronParamsId,
  patronsControllers.deleteProfile
);
router.get("/patron", verifyToken, patronsControllers.getPatronProfile);

module.exports = router;
