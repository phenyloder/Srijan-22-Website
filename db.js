// getting-started.js


const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();
 
const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URL,()=>{
      console.log("Welcome to mongodb");
    })
}

module.exports=connectToMongo;