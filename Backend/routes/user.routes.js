const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/AuthController")

//signUp
router.post('/signUp',register);

//SignIn
router.post('/signIn',login);

//Logout
// router.get('/logout', logout);

//addToCart
// router.patch('/addcart', addCart);

//orders
// router.get('/orders', orders)


module.exports = router;