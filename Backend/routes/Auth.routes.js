const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/AuthController")

//signUp
router.post('/signUp',register);

//SignIn
router.post('/signIn',login);


module.exports = router;