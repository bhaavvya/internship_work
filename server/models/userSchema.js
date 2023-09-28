const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:2
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//hashing password to secure

UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password,10)
    }
    next();
})

//Generate Token to verify user
UserSchema.methods.generateToken = async function(){
    try{
        let generateToken = jwt.sign({_id : this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token : generateToken})
        await this.save()
        return generateToken
    }catch(err){
        console.log("error print karo ",err)
    }
}

//cretae model
const Users = new mongoose.model("USER",UserSchema)
module.exports = Users