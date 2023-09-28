const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

const CourseSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:2
    },
    author:{
        type:String,
        required:true,
        unique:true
    },
    link : {
        type: String,
        required : true,
    }

})

//cretae model
const Course = new mongoose.model("COURSE",CourseSchema)
module.exports = Course