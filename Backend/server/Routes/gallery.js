const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  createPhoto,
  getPhoto,
  getPhotos,
  deletePhoto,
  updatePhoto,
} = require("../Controllers/galleryController");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: Storage,
});

const router = express.Router();

// GET all photos
router.get("/", getPhotos);

// GET a single photo
router.get("/:id", getPhoto);

// POST a photo
router.post("/", upload.single("image"), createPhoto);

// DELETE a photo
router.delete("/:id", deletePhoto);

// UPDATE a photo
router.patch("/:id", updatePhoto);

module.exports = router;
