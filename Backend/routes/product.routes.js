const express = require("express")
const router = express.Router();
//import controller
const {addProductController, getProductController,  getProductByIdController, deleteProductController} = require("../controllers/product.controller")
//import middleware
const authorization = require("../middleware/Authenticate")

//post
router.post('/admin/addProduct',addProductController)

// get
router.get('/admin/getProduct', getProductController )

//get product by id
router.get('/admin/productById', getProductByIdController)

//put
// router.put('/admin/updateProduct',authorization, updateProductController )

//delete
router.delete('/admin/deleteProduct', deleteProductController )

module.exports = router