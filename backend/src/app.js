const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// connect database
connectDB();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Facilitator backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
