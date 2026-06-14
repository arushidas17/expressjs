const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/demo")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Model
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/iman", (req, res) => {
  res.send("iman is the best boy");
});

// Create User
app.get("/create-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Arushi",
      age: 20,
    });

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 