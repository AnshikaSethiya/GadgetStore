const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        item_id:{
            type:String,
            required:true,
        },
        item_name:{
            type:String,
            required:true,
        },
        item_price:{
            type:Number,
            require:true,
        },
        item_category:{
            type:String,
            required:true,
        },
        item_detail:{
            type:String,
            required:true,
        },
        item_image:{
            type:String,
        },
    },
    {timestamps:true}
);
const ProductData = mongoose.model("productData", productSchema);

module.exports = ProductData;