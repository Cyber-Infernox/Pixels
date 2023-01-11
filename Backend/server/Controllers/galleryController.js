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
  const photos = await Photo.find().sort({ createdAt: -1 });
  res.status(200).json(photos);
};

// GET a single photo
const getPhoto = async (req, res) => {};

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
const deletePhoto = async (req, res) => {};

// UPDATE a photo
const updatePhoto = async (req, res) => {};

module.exports = { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto };
