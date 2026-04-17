const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: [
        "SUPER_ADMIN",
        "SALESMAN",
        "MARKETING_MANAGER",
        "CRE",
        "CRO",
        "BRANCH_MANAGER",
        "CEO"
      ],
      default: "SALESMAN"
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);