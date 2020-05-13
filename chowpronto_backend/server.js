const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API running"));

// If we deploy to heroku or somewhere else, the PORT variable will be set by the hosting provider
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
