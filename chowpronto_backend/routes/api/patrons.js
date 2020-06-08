const express = require("express");
const router = express.Router();
const patronsControllers = require("../../controllers/patrons-controller");
const { verifyToken } = require("../../middleware/verifyToken");
const { checkPatronParamsId } = require("../../middleware/checkPatron");

// @route    POST api/patrons/login
// @desc     patron can login
// @access   Public

// @route    POST api/patrons/signup
// @desc     New patron can create an account
// @access   Public

// @route    DELETE api/patrons/deleteprofile/:patronId
// @desc     New patron can create an account
// @access   Public

router.post("/signup", patronsControllers.signup);
router.post("/login", patronsControllers.login);
router.delete(
  "/profile/:patronId",
  verifyToken,
  checkPatronParamsId,
  patronsControllers.deleteProfile
);

module.exports = router;
