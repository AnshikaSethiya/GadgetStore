const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WishlistSchema = new Schema(
    {
        item_id:{
            type:Schema.Types.ObjectId,
            ref:"ProductData"
        },
        item_price:{
            type:Schema.Types.ObjectId,
            ref:"ProductData",
        },
        user_id:{
            type:Schema.Types.ObjectId,
            ref:"UserData",
        },
        name:{
            type:Schema.Types.ObjectId,
            ref:"UserData"
        },
        address:{
            type:Schema.Types.ObjectId,
            ref:"UserData",
        }
    },
    {timestamps:true}
)
const WishlistData = mongoose.model("WishlistData", WishlistSchema)
module.exports = WishlistData;