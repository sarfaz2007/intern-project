const router = require("express").Router();
const { createUserController } = require("../controllers/User.controller");

router.post("/create", createUserController);

module.exports = router;