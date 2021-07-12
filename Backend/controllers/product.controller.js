const productData = require("../models/Product.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const addProductController = async (req,res) => {
    try {
        const isProductExist = await productData.findOne({item_id:req.body.item_id})
        console.log("Product Check", isProductExist)
        if(isProductExist){
            res.status(400).send("Product already exist");
        }else{
            const product = new productData({
                item_id:req.body.item_id,
                item_name:req.body.item_name,
                item_price:req.body.item_price,
                item_category:req.body.item_category,
                item_detail:req.body.item_detail,
            });
            await product.save();
            res.status(201).send("Product added successfully!!")
            console.log(product);
        }
    } catch (error) {
        console.log("Add product Error: ",error);
    }
}


const getProductController = async(req,res) => {
    try {
        const getProduct = await productData.find();
        res.status(200).send(getProduct);
        console.log(getProduct);
    } catch (error) {
        console.log("get product error: ", error)
    }
}

const  getProductByIdController = async(req,res) => {
    try {
        // console.log("req.query: ",req.query)
        const ProductId = req.query.ProductId;
        const product = await productData.findById({_id:ProductId});
        if(!product){
            res.status(404).send("Product does not exist");
        }else{
            res.status(200).send(product)
            console.log(product);
        }
    } catch (error) {
        console.log("get product by id error : ",error);
    }
}

const deleteProductController = async (req, res) => {
    try{
        console.log("req.query:", req.query);
        const ProductId = req.query.ProductId;
        const product = await productData.findByIdAndDelete({_id:ProductId});
        if(!product){
            res.status(404).send("Product does not exist!!")
        }else{
            res.status(200).send("Product deleted successfully!!")
        }
    }catch(error){
        console.log("Error: ",error)
    }
}

module.exports={
    addProductController,
    getProductController,
    getProductByIdController,
    deleteProductController
}