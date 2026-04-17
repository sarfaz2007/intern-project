const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "User disabled" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    if (user.role !== role) {
      return res.status(403).json({ message: "Role mismatch" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login success",
      token,
      user
    });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;