const bcrypt = require("bcryptjs");
const Patron = require("../models/Patron");
const jwt = require("jsonwebtoken");
const { validate, validateDeliveryData } = require("./validation");
const { GUEST_PATRON, REGISTER_PATRON } = require("../utils/roles");

const signup = async (req, res) => {
  const { name, email, password, phone, address, postcode, role } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !postcode ||
    (role === REGISTER_PATRON && !password)
  ) {
    return res
      .status(401)
      .send({ errorMsg: "Signing up failed, please fill in all form fields." });
  }

  if (!role || (role !== REGISTER_PATRON && role !== GUEST_PATRON)) {
    return res
      .status(400)
      .send({ errorMsg: "Signing up failed due to technical problem." });
  }

  const errorMessages = validate(
    name,
    email,
    phone,
    address,
    postcode,
    password,
    role
  );
  if (errorMessages.length !== 0) {
    return res.status(400).send({ errorMsg: errorMessages });
  }

  try {
    let newPatron;
    let passwordToSave = {};
    if (role === REGISTER_PATRON) {
      const existingUser = await Patron.findOne({ email });
      if (existingUser) {
        return res
          .status(500)
          .send({ errorMsg: "User with given credentials already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      passwordToSave = { password: hashedPassword };
      delete password;
      delete salt;
    }

    newPatron = new Patron({
      name,
      email,
      phone,
      address,
      postcode,
      role,
      ...passwordToSave,
    });

    const savedPatron = await newPatron.save();
    const token = await jwt.sign(
      { _id: newPatron._id, role: newPatron.role },
      process.env.TOKEN_SECRET
    );

    res.send({
      token,
      patron: {
        _id: savedPatron._id,
        name: savedPatron.name,
        email: savedPatron.email,
        phone: savedPatron.phone,
        address: savedPatron.address,
        postcode: savedPatron.postcode,
        role: savedPatron.role,
      },
    });
  } catch (err) {
    res
      .status(500)
      .send({ errorMsg: "Signing up failed, please try again later." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(403)
      .send({ errorMsg: "Signing up failed, please fill in all form fields." });
  }

  const patron = await Patron.findOne({ email });
  if (!patron)
    return res
      .status(400)
      .send({ errorMsg: "User with given credentials doesn't exist" });

  const validPassword = await bcrypt.compare(password, patron.password);
  if (!validPassword)
    return res
      .status(400)
      .send({ errorMsg: "User with given credentials doesn't exist" });

  const token = jwt.sign(
    { _id: patron._id, role: patron.role },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "720h",
    }
  );
  res.send({
    token,
    patron: {
      _id: patron._id,
      name: patron.name,
      email: patron.email,
      phone: patron.phone,
      address: patron.address,
      postcode: patron.postcode,
      role: patron.role,
    },
  });
};

const deleteProfile = async (req, res) => {
  const { patronId } = req.params;

  try {
    const patron = await Patron.findOneAndRemove({ _id: patronId });
    res.send({ _id: patron._id });
  } catch (err) {
    res.status(500).send({ errorMsg: "Couldn't delete profile" });
  }
};

const getPatronProfile = async (req, res) => {
  const { _id } = req.patronData;

  try {
    const patron = await Patron.findOne(
      { _id },
      {
        name: 1,
        email: 1,
        phone: 1,
        address: 1,
        postcode: 1,
        role: 1,
      }
    );
    res.send({ patron });
  } catch (err) {
    res.status(500).send({ errorMsg: "Couldn't find profile" });
  }
};

const updateProfile = async (req, res) => {
  const { patronId } = req.params;
  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      passwordToSave = { password: hashedPassword };
      delete password;
      delete salt;
      await Patron.findOneAndUpdate({ _id: patronId }, passwordToSave);
      res.send({ message: "Your password was changed successfully!" });
    } catch (err) {
      res.status(500).send({ errorMsg: "Couldn't update password" });
    }
  }
  if (req.body.patron) {
    const { patron } = req.body;
    const errorMessages = validateDeliveryData(
      patron.name,
      patron.email,
      patron.phone,
      patron.address,
      patron.postcode
    );
    if (errorMessages.length !== 0) {
      return res.status(400).send({ errorMsg: errorMessages });
    }
    try {
      const { name, email, phone, address, postcode } = patron;
      const existingUser = await Patron.findOne({
        email: email,
        role: REGISTER_PATRON,
      });

      if (
        existingUser &&
        existingUser._id &&
        existingUser._id.toString() !== patronId
      ) {
        return res
          .status(500)
          .send({ errorMsg: "Please provide different email" });
      }
      await Patron.findOneAndUpdate(
        { _id: patronId },
        {
          name,
          email,
          phone,
          address,
          postcode,
        }
      );

      return res.send({
        message: "Your personal details were changed successfully!",
      });
    } catch (err) {
      return res.status(500).send({ errorMsg: "Couldn't update data" });
    }
  }
  return res.status(500).send({ errorMsg: "Sorry, Couldn't update data" });
};

exports.signup = signup;
exports.login = login;
exports.deleteProfile = deleteProfile;
exports.getPatronProfile = getPatronProfile;
exports.updateProfile = updateProfile;
