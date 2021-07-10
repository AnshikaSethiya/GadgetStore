const express = require("express")
const router = express.Router();
//import controller
const {addProductController} = require("../controllers/product.controller")
//import middleware
const authorization = require("../middleware/Authenticate")

//post
router.post('/admin/addProduct', addProductController)

//get
// router.get('/admin/getProduct',authorization, getProductController )

//put
// router.put('/admin/updateProduct',authorization, updateProductController )

//delete
// router.delete('/admin/deleteProduct',authorization, deleteProductController )

module.exports = router