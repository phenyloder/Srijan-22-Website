const mongoose=require('mongoose');
const { Schema } = mongoose;

  const registerSchema = new Schema({
    tname:{
        type:String,
    },
    members:{
        type:Array
    },
    
  });

  module.exports=mongoose.model('RegisterEvent',registerSchema)