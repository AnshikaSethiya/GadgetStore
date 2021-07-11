const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

//creating schema 
const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        email:{
            type:String,
            required:true,
            unique: [true,"Email id already exists"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email");
                }
            }
        },
        contact_No:{
            type:Number,
            min:10
        },
        password:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true
        },
        userType:{
            type:String,
            default:"user"
        },

    },

    {timestamps:true}
);

const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;