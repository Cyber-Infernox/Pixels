const express = require("express");
const {
  createPhoto,
  getPhoto,
  getPhotos,
  deletePhoto,
  updatePhoto,
} = require("../Controllers/galleryController");

const router = express.Router();

// GET all photos
router.get("/", getPhotos);

// GET a single photo
router.get("/:id", getPhoto);

// POST a photo
router.post("/", createPhoto);

// DELETE a photo
router.delete("/:id", deletePhoto);

// UPDATE a photo
router.patch("/:id", updatePhoto);

module.exports = router;
