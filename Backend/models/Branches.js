const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Branch name is required"],
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Branch", branchSchema);