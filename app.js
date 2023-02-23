// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("You've acquired the DB, give me your cookies");
});

// Track ROUTES
const trackController = require("./controllers/trackController.js");
app.use("/tracks", trackController);


// Room ROUTES
const roomController = require("./controllers/roomController.js");
app.use("/rooms", roomController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
