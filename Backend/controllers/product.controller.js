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
        }
    } catch (error) {
        console.log("Add product Error: ",error);
    }
}

module.exports={
    addProductController
}