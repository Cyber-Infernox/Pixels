const Photo = require("../Models/dbGallery");
const mongoose = require("mongoose");

// GET all photos
const getPhotos = async (req, res) => {};

// GET a single photo
const getPhoto = async (req, res) => {};

// POST a photo
const createPhoto = async (req, res) => {
  const { title, date } = req.body;

  try {
    const photo = await Photo.create({ title, date });
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
