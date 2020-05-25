const express = require("express");
const router = express.Router();
const patronsControllers = require("../../controllers/patrons-controller");

// @route    GET api/users
// @desc     Test route
// @access   Public

// if you need to be authenticated to access that endpoint, then the @access is Private. If not, it's Public.

router.get("/", (req, res) => res.send("Users route"));
router.post("/signup", patronsControllers.signup);

module.exports = router;
