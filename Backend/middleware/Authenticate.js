const User = require("../models/User.model")
const jwt = require("jsonwebtoken")

//authenticateion for protected routes
// const authorization = async(res,req,next) => {
//     //middleware function
//     try{
//         const token = req.header("Authorization").replace("Bearer ", "")
//         const decoded = jwt.verify(token, "newuser");
//         const verifyUser = await User.findOne({_id:decoded._id});
//         if(!verfiyUser){
//             res.status(401).json({
//                 error:"Please authenticate!",
//             });
//         }
//         req.token = token,
//         req.user=user;
//         next();
//     }catch(error){
//         res.status(500).json({
//             error:"Something went wrong",
//         });
//     }
// };

const authorization = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication "})

        jwt.verify(token, )
    } catch (error) {
        
    }
}

module.exports = authorization