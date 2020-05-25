const bcrypt = require("bcryptjs");
const Patron = require("../models/Patron");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const existingUser = await Patron.findOne({ email });
  if (existingUser) {
    return res.status(500).send("User with given id already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newPatron = new Patron({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedPatron = await newPatron.save();
    const token = jwt.sign({ _id: newPatron._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send({
      token,
      patron: {
        _id: savedPatron._id,
        name: savedPatron.name,
        email: savedPatron.email,
      },
    });
  } catch (err) {
    res.status(500).send("Signing up failed, please try again later.");
  }
};

const login = async (req, res) => {
  const patron = await Patron.findOne({ email: req.body.email });
  if (!patron)
    return res.status(400).send("User with this email doesn't exist");

  const validPassword = await bcrypt.compare(
    req.body.password,
    patron.password
  );
  if (!validPassword) return res.status(400).send("invalid password");

  const token = jwt.sign({ _id: patron._id }, process.env.TOKEN_SECRET, {
    expiresIn: "240h",
  });
  res.header("auth-token", token).send({
    token,
    patron: { _id: patron._id, name: patron.name, emil: patron.email },
  });
};

exports.signup = signup;
exports.login = login;
