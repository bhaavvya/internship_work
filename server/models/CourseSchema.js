const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

const CourseSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique : false
    },
    author:{
        type:String,
        required:true,
        unique:false
    },
    link : {
        type: String,
        required : true,
        unique : false
    }

})

//cretae model
const Course = new mongoose.model("COURSE",CourseSchema)
module.exports = Course
