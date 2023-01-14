const Photo = require("../Models/dbGallery");
const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");

// const Storage = multer.diskStorage({
//   destination: "Uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: Storage,
// }).single("image");

// GET all photos
const getPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort({ createdAt: -1 });
  res.status(200).json(photos);
};

// GET a single photo
const getPhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such photo" });
  }

  const photo = await Photo.findById(id);

  if (!photo) {
    return res.status(404).json({ error: "No such photo" });
  }

  res.status(200).json(photo);
};

// POST a photo
const createPhoto = async (req, res) => {
  const { title } = req.body;

  try {
    const photo = await Photo.create({ title });
    res.status(200).json(photo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a photo
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such photo" });
  }

  const photo = await Photo.findOneAndDelete({ _id: id });

  if (!photo) {
    return res.status(404).json({ error: "No such photo" });
  }

  res.status(200).json(photo);
};

// UPDATE a photo
const updatePhoto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such photo" });
  }

  const photo = await Photo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!photo) {
    return res.status(404).json({ error: "No such photo" });
  }

  res.status(200).json(photo);
};

module.exports = { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto };
