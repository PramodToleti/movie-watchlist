require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const moviesRoutes = require("./routes/movies.routes");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", moviesRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Movies API",
  });
});

async function connect() {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to DB: ", err);
    mongoose.disconnect();
  }
}

connect();
