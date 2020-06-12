const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const path = require("path");

const app = express();

connectDB();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));

// Define Routes
app.use("/api/patrons", require("./routes/api/patrons"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/vendors", require("./routes/api/vendors"));
app.use("/api/menuitems", require("./routes/api/menuitems"));
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/tags", require("./routes/api/tags"));

// When you put four parameters express knows that is an error handling middleware function - they are only executed when an error is thrown from a request, if an error was sent from the previous middlewares
app.use((error, req, res, next) => {
  // Checking if somehow we've already sent out a message
  if (res.headerSent) {
    return next(error);
  }

  // If the middleware that errored provided an error.code and a error.message, we will use them here
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
