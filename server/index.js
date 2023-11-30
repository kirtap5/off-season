const express = require("express");
const dailies = require("./routes/dailies");
const connectDB = require("./db/connect");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// For middleware
app.use(cors());
app.use(express.static("../client/src"));
app.use(express.json());

// Routes

app.use("/api/v1/dailies", dailies);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// Use middleware for routing instead.

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});
