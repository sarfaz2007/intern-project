const Branch = require("../models/Branches");

// CREATE
exports.createBranch = async (req, res) => {
  try {
    const { name, location, city } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const branch = await Branch.create({ name, location, city });

    res.status(201).json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getBranches = async (req, res) => {
  try {
    const branches = await Branch.find().sort({ createdAt: -1 });
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE (optional but useful)
exports.getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);

    if (!branch) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!branch) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);

    if (!branch) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.json({ message: "Branch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};