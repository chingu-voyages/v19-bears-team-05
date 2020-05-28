const bcrypt = require("bcryptjs");
const Patron = require("../models/Patron");
const jwt = require("jsonwebtoken");
const { validate } = require("./validation");

const signup = async (req, res) => {
  const { name, email, password, phone, address, postcode } = req.body;
  if (!name || !email || !password || !phone || !address || !postcode) {
    return res
      .status(403)
      .send("Signing up failed, please fill in all form fields.");
  }

  const errorMessages = validate(
    name,
    email,
    password,
    phone,
    address,
    postcode
  );
  if (errorMessages.length !== 0) {
    return res.status(400).send(errorMessages);
  }

  const existingUser = await Patron.findOne({ email });
  if (existingUser) {
    return res.status(500).send("User with given credentials already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newPatron = new Patron({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    postcode,
  });

  delete password;
  delete salt;

  try {
    const savedPatron = await newPatron.save();
    const token = await jwt.sign(
      { _id: newPatron._id },
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
      },
    });
  } catch (err) {
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

  const token = jwt.sign({ _id: patron._id }, process.env.TOKEN_SECRET, {
    expiresIn: "720h",
  });
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
