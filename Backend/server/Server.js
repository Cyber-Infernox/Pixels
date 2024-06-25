require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const galleryRoutes = require("./Routes/gallery");
const userRoutes = require("./Routes/user");

// express app
const app = express();

// File Management Middleware
app.use("/images", express.static(path.join(__dirname, "Assets/Images")));

// middleware
app.use(express.json()); // For POST and PATCH requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// File Management
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Assets/Images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    // req.body.name
    // file.originalname (For Postman)
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully!");
  } catch (error) {
    console.log(error);
  }
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
