require("dotenv").config();
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000
const app = express();


// importing routes
const userRoute = require("./routes/Auth.routes");

//product routes
const productRoute = require("./routes/product.routes");

app.use(cors());
app.use(bodyParser.json())
app.use(userRoute);
app.use(productRoute)

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
    app.listen(port,() =>{
        console.log(`Server is up on port ${port}`);
    });


