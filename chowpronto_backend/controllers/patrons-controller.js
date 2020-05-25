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

exports.signup = signup;
