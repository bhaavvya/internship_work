const mongoose=require("mongoose")

const MsgSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,


    },
    password:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,

    }
})

//cretae model
const msgs = new mongoose.model("MESSAGE",MsgSchema)
module.exports = msgs