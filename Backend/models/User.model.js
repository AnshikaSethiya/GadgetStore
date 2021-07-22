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
            lowercase:true,
            required:[true,"Please enter E-mail!!"],
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
            required:[true,"Please enter Password!!"],
            minLength:[6,"Minimum 6 characters required!!"]
        },
        address:{
            type:String,
            required:true
        },
        userType:{
            type:String,
            default:"user"
        },
        cart:{
            type:Array,
            default:[]
        }

    },

    {timestamps:true}
);
//fire a function after doc saved to db
userSchema.post('save', function(doc, next){
    console.log('new user created and saved', doc);
    next();
});


const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;