const express = require("express");
const router = express.Router();
const tagsControllers = require("../../controllers/tags-controller");

// @route    GET api/tags
// @desc    Tags route
// @access   Public

router.get("/", tagsControllers.getTags);

module.exports = router;
