const mongoose=require('mongoose');
const { Schema } = mongoose;

  const registerSchema = new Schema({
    event_name:{
      type:String,
    },
    tname:{
        type:String,
    },
    members:{
        type:Array
    },
    
  });

  module.exports=mongoose.model('RegisterEvents',registerSchema)