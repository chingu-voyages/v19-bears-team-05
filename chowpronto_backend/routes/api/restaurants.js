const express = require("express");
const router = express.Router();

// @route    GET api/restaurants
// @desc     Restaurants route
// @access   Public

router.get("/", (req, res) => res.send("Restaurants route"));

module.exports = router;
