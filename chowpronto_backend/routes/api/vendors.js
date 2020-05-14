const express = require("express");
const router = express.Router();

const DUMMY_VENDORS = [
  {
    _id: 0,
    name: "DIGIRANG ",
    location: {
      latitude: -77.636804,
      longitude: 11.890412,
    },
    address: "808 Bank Street, Dawn, Wyoming, 1677",
    description:
      "Et velit nisi culpa adipisicing amet do anim exercitation fugiat. Elit adipisicing mollit amet aute qui quis velit minim.",
    logoURL: "http://placehold.it/32x32",
  },
  {
    _id: 1,
    name: "LUNCHPOD ",
    location: {
      latitude: 47.982436,
      longitude: 69.659234,
    },
    address: "960 High Street, Caspar, Pennsylvania, 2560",
    description:
      "Occaecat sint ea do laborum. Tempor occaecat excepteur nulla consectetur veniam.",
    logoURL: "http://placehold.it/32x32",
  },
  {
    _id: 2,
    name: "XIXAN ",
    location: {
      latitude: -67.971989,
      longitude: -45.734251,
    },
    address: "287 Fanchon Place, Stockwell, Alaska, 2017",
    description:
      "Nostrud consequat reprehenderit in quis voluptate. In mollit labore sint sunt nulla id sit ipsum tempor eu.",
    logoURL: "http://placehold.it/32x32",
  },
  {
    _id: 3,
    name: "IMPERIUM ",
    location: {
      latitude: 1.681251,
      longitude: 68.092934,
    },
    address: "955 Grace Court, Omar, Louisiana, 4451",
    description:
      "Adipisicing non laboris fugiat fugiat. Laboris ex ipsum sunt magna aliquip qui enim ex dolor incididunt amet sit.",
    logoURL: "http://placehold.it/32x32",
  },
  {
    _id: 4,
    name: "SOFTMICRO ",
    location: {
      latitude: 65.173241,
      longitude: 153.791291,
    },
    address: "898 Seeley Street, Clarktown, Utah, 2381",
    description:
      "Excepteur labore incididunt velit deserunt reprehenderit amet esse. Enim ad amet Lorem magna sit.",
    logoURL: "http://placehold.it/32x32",
  },
];

// @route    GET api/vendors
// @desc     Vendors route
// @access   Public

router.get("/", (req, res) => {
  const vendors = DUMMY_VENDORS;
  res.json({ vendors });
});

router.get("/:vid", (req, res, next) => {
  const vendorId = req.params.vid; // { vid: 'v1' }
  const vendor = DUMMY_VENDORS.find((v) => {
    return v._id.toString() === vendorId;
  });

  if (!vendor) {
    const error = new Error("Could not find a vendor for the provided id.");
    error.code = 404;
    return next(error);
  }

  res.json({ vendor }); // => { vendor } => { vendor: vendor }
});

module.exports = router;
