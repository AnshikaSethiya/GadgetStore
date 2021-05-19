const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema 
const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        email:{
            type:String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        contact_No:{
            type:Number,
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