const UserData = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req,res,next) => {    
    try {
        // bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        //     if(err){
        //         res.json({
        //             error:err
        //         })
        //     }
        //   })
        const hashedPass = bcrypt.hashSync(req.body.password, 10);
        const isUser = await UserData.findOne({email:req.body.email})
        if(isUser){
            res.status(401).send("User already exist!! ")
        }else{
                const user = new UserData({
                 name:req.body.name,
                 email:req.body.email,
                 contact_No:req.body.contact_No,
                 password:hashedPass,
                 address:req.body.address
                 });
                await user.save();
                console.log(user);
            res.status(201).send("User Added Successfully!!");
        }
    } catch (error) {
        console.log("Register Error: ",error)
    }
}


const login = (req,res,next) => {
    var username = req.body.username
    var password = req.body.password

    UserData.findOne({$or: [{email:username},{password:password}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err,result){
              if(err){
                  res.json({
                      error:err
                  })
              } 
              if(result){
                  let token = jwt.sign({name:user.name, _id:user._id.toString()}, 'verySecretValue', {expiresIn:'1d'})
                  res.json({
                      message:"Login Successful",
                      token
                  })
              }else{
                  res.json({
                      message:"Password does not match!!"
                  })
              }
            })
        }else{
            res.json({
                message:'User not found!'
            })
        }
    })
}



module.exports = {
    register,login
}
