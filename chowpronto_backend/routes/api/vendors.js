const express = require("express");
const router = express.Router();
const HttpError = require("../../models/http-error");
const vendorsControllers = require("../../controllers/vendors-controller");

// @route    GET api/vendors
// @desc     Vendors route
// @access   Public

router.get("/", vendorsControllers.getVendors);

router.get("/:vid", vendorsControllers.getVendorById);

module.exports = router;
