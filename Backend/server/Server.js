require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const galleryRoutes = require("./Routes/gallery");
const userRoutes = require("./Routes/user");

// express app
const app = express();

// middleware
app.use(express.json()); // For POST and PATCH requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/gallery", galleryRoutes);
app.use("/api/user", userRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to database");
    });
  })
  .catch((error) => {
    console.log(error);
  });
