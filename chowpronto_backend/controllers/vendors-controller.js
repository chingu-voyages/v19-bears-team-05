const HttpError = require("../models/http-error");
const Vendor = require("../models/Vendor");

const getVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
};

const getVendorById = async (req, res) => {
  try {
    const vendorId = req.params.vid; // { vid: 'v1' }
    const vendor = await Vendor.findOne({ _id: vendorId }).populate("menu");
    res.json(vendor); // => { vendor } => { vendor: vendor }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("No vendor with this Id");
  }
};

exports.getVendors = getVendors;
exports.getVendorById = getVendorById;
