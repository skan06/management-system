const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: String,
    //   required: true,
    // },
    title: {
      type: String,
      max: 20,
    },
    form: {
      type: String,
      max: 500,
    },
    image: {
      type: String,
    },
    color: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Page", pageSchema);
