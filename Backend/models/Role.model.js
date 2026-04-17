const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model("Role", roleSchema);