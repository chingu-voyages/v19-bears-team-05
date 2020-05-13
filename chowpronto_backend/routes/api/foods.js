const express = require("express");
const router = express.Router();

// @route    GET api/foods
// @desc     Foods route
// @access   Public

router.get("/", (req, res) => res.send("Foods route"));

module.exports = router;
