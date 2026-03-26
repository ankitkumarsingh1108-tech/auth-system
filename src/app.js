const express = require("express");
const app = express();

app.use(express.json());

//IMPORT ROUTES
const authRoutes = require("./routes/authRoutes");

// CONNECT ROUTES (MOST IMPORTANT LINE)
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

module.exports = app;