const express = require("express");
const router = express.Router();

// @route    GET api/menuitems
// @desc     Menu Items route
// @access   Public

router.get("/", (req, res) => res.send("Menu Items route"));

module.exports = router;
