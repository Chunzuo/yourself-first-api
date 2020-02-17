const mongoose = require("mongoose");
const definition = {
  clientName: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true,
    default: ""
  },
  date: {
    // The date when receive the feedback from the client
    type: Date,
    default: Date.now()
  }
};

const options = { timestamps: true };

const reviewSchema = new mongoose.Schema(definition, options);

module.exports = mongoose.model("Review", reviewSchema);
