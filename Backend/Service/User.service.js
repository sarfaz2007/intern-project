const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const Role = require("../models/Role.model");

const createUserService = async (data) => {
  const { name, email, password, roleCode } = data;

  const role = await Role.findOne({ code: roleCode });
  if (!role) throw new Error("Invalid role");

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role.code // ✅ IMPORTANT FIX
  });

  return user;
};

module.exports = { createUserService };