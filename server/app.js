const express = require("express");
const dotenv=require("dotenv")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")

dotenv.config({path: './config.env'})
require('./db/conn')
const port = process.env.PORT
//require model
const Users = require('./models/userSchema')
const msgs = require('./models/msgSchema')
const Course=require('./models/CourseSchema')
const authenticate = require('./middleware/authenticate')
const app=express()
//These methods are used to get data and cookies from frontend
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())


app.get('/',(req,res) => {
    res.send("Hello World")
})

//Registration API
app.post('/register',async (req,res) =>{
    try {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        })

        const created = await createUser.save()
        console.log(created)
        res.status(200).send("Registered")
    } catch (error) {
        res.status(404).send(error)
        console.log("ab yaha error aa gaya ",error)
    }
})

//Login API 
app.post('/login',async (req,res) =>{
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await Users.findOne({email : email})
        if(user){
            const ismatch = await bcryptjs.compare(password , user.password)

            if(ismatch){
                const token = await user.generateToken()
                res.cookie("jwt" , token , {
                    //expires token in 24 hrs
                    expires : new Date(Date.now() + 86400000),
                    httpOnly:true
                })
                res.status(200).send("login successful")
            }else{
                res.status(404).send("invalid credentials")
            }
        }else{
            res.status(404).send("user not found")
        }
    } catch (error) {
        console.log("ab ek aur baar ",error)
        res.status(404).send(error)
    }
})


app.post('/message',async (req,res) =>{
    try {
        const email = req.body.email
        const password = req.body.password
        const message = req.body.message

        const sendmsgs = new msgs({
            email : email,
            password : password,
            message : message
        })

        const createdmsg = await sendmsgs.save()
        console.log(createdmsg)
        res.status(200).send("sent")
    } catch (error) {
        res.status(404).send(error)
        console.log("ab yaha error aa gaya ",error)
    }
})

app.post('/addcourse',async (req,res) =>{
    try {
        const name = req.body.name
        const author = req.body.author
        const link = req.body.link

        const addcourse = new Course({
            name : name,
           author :author,
           link : link
        })

        const createdcourse = await addcourse.save()
        console.log(createdcourse)
        res.status(200).send("added")
    } catch (error) {
        res.status(404).send(error)
        console.log("ab yaha error aa gaya ",error)
    }
})

app.get('/seecourse',async (req,res) =>{
    try {
        const allcourse = await Course.find({});
      res.json(allcourse)
    
    } catch (error) {
        res.status(404).send(error)
        console.log("ab yaha error aa gaya ",error)
    }
})

app.get('/auth',authenticate,(req,res) =>{

})

// Create an API route to fetch the number of entries
app.get('/entryCount', async (req, res) => {
    try {
      const allusers = await Users.find({});
      res.send({data:allusers})
      //console.log(allusers.length)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.get('/userdata', async (req, res) => {
    try {
      const allusers = await Users.find({});
      res.send({data:allusers.length})
      //console.log(data)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
app.get('/logout',(req,res) =>{
    res.clearCookie("jwt" ,{path : '/'})
    res.status(200).send("Logout Succesfully")
})

app.listen(port,()=>{
    console.log("server listening at port 3001")
})