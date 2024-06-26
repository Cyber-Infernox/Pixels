const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    // likes: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

// Making model of the above schema
module.exports = mongoose.model("Photo", photoSchema);
