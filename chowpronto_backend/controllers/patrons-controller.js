const bcrypt = require("bcryptjs");
const Patron = require("../models/Patron");
const jwt = require("jsonwebtoken");
const { validate } = require("./validation");

const signup = async (req, res) => {
  const { firstName, secondName, email, password } = req.body;
  if (!email || !password || !firstName || !secondName) {
    return res
      .status(403)
      .send("Signing up failed, please fill in all form fields.");
  }

  const errorMessages = validate(firstName, secondName, email, password);
  if (errorMessages.length !== 0) {
    return res.status(400).send(errorMessages);
  }

  const existingUser = await Patron.findOne({ email });
  if (existingUser) {
    return res.status(500).send("User with given id already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newPatron = new Patron({
    firstName,
    secondName,
    email,
    password: hashedPassword,
  });

  delete password;

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
        firstName: savedPatron.firstName,
        secondName: savedPatron.secondName,
        email: savedPatron.email,
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
    expiresIn: "240h",
  });
  res.send({
    token,
    patron: {
      _id: patron._id,
      firstName: patron.firstName,
      secondName: patron.secondName,
      emil: patron.email,
    },
  });
};

exports.signup = signup;
exports.login = login;
