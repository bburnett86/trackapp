require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Parse JSON out of data before sending to routes
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://bburnett86:Eazy3299@track-app.weakjpm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
