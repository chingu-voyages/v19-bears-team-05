const bcrypt = require("bcryptjs");
const Patron = require("../models/Patron");
const jwt = require("jsonwebtoken");
const { validate } = require("./validation");
const { GUEST_PATRON, REGISTER_PATRON } = require("../utils/roles");

const signup = async (req, res) => {
  console.log("Signup was hit");
  const { name, email, password, phone, address, postcode, role } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !postcode ||
    (role === REGISTER_PATRON && !password)
  ) {
    console.log("req.body", req.body);
    console.log("first error");
    return res
      .status(400)
      .send("Signing up failed, please fill in all form fields.");
  }

  if (!role || (role !== REGISTER_PATRON && role !== GUEST_PATRON)) {
    return res.status(400).send("Signing up failed due to technical problem.");
  }

  const errorMessages = validate(
    name,
    email,
    password,
    phone,
    address,
    postcode,
    role
  );
  if (errorMessages.length !== 0) {
    return res.status(400).send(errorMessages);
  }

  try {
    let newPatron;
    let passwordToSave = {};
    if (role === REGISTER_PATRON) {
      const existingUser = await Patron.findOne({ email });
      if (existingUser) {
        return res
          .status(500)
          .send("User with given credentials already exists");
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
    console.error(err);
    res.status(500).send("Signing up failed, please try again later.");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(403)
      .send("Signing up failed, please fill in all form fields.");
  }

  const patron = await Patron.findOne({ email });
  if (!patron)
    return res.status(400).send("User with given credentials doesn't exist");

  const validPassword = await bcrypt.compare(password, patron.password);
  if (!validPassword)
    return res.status(400).send("User with given credentials doesn't exist");

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
      emil: patron.email,
      phone: patron.phone,
      address: patron.address,
      postcode: patron.postcode,
    },
  });
};

exports.signup = signup;
exports.login = login;
