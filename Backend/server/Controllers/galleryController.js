const Photo = require("../Models/dbGallery");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");

const Storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "Uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only images are allowed..."));
  }
};

const upload = multer({
  storage: Storage,
  fileFilter: isImage,
});

const uploadImage = upload.single("image");

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
  const savePhoto = new Photo({
    title: req.body.title,
    image: {
      data: fs.readFileSync("Uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  savePhoto
    .save()
    .then((res) => {
      console.log("Image is saved");
    })
    .catch((err) => {
      console.log("Error has occurred");
    });
  res.send("Image is saved");
};

//   const { title } = req.body;
//   const image = req.file;
//   console.log(image);

//   try {
//     const photo = await Photo.create({ title });
//     res.status(200).json(photo);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

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

module.exports = {
  uploadImage,
  createPhoto,
  getPhotos,
  getPhoto,
  deletePhoto,
  updatePhoto,
};
