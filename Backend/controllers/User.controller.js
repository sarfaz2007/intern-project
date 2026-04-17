const { createUserService } = require("../Service/User.service");

const createUserController = async (req, res) => {
  try {
    const user = await createUserService(req.body);

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = { createUserController };