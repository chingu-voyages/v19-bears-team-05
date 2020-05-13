const express = require("express");
const router = express.Router();

// @route    GET api/users
// @desc     Test route
// @access   Public

// if you need to be authenticated to access that endpoint, then the @access is Private. If not, it's Public.

router.get("/", (req, res) => res.send("Users route"));

module.exports = router;
