require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// importing routes
const userRoute = require("./routes/Auth.routes");
app.use(bodyParser.json())
app.use(userRoute);

//setting connection b/w node and db
mongoose
.connect(process.env.MONGODBURI,
    {
        useFindAndModify:false,
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
    }
).then(() => {
    console.log("connected to database");
})
.catch((error) =>{
    console.log("Connection error :", error)
});

//setting listening port
    app.listen(8000,() =>{
        console.log("Server is up on port 8000");
    });


