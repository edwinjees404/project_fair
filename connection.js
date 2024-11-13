//import mongoose
const mongoose = require('mongoose')

connectionstring = process.env.DATABASE

mongoose.connect(connectionstring).then((res)=>{
    console.log("MonogoDB connnected sucessfully");
    
}).catch((err)=>{
    console.log(`MongoDB connection failed due to ${err}`);
    
})