console.log('zaid')
const express=require("express")
const app=express()
const port =3000

app.get("/login",(req,res)=>{
    res.send("zaid")

    
})
app.get('/rr' , (req,res)=>{
    res.redirect("/login")
})

const path =require("path")
const puplicFoulder =path.join(__dirname,"puplic")

app.get('/tt' , (req,res)=>{
    res.sendFile(puplicFoulder+"/index.html")
})
const ejs =require("ejs")
app.listen(port,()=>{
    console.log("server working")
})

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/project1").then(()=>{
    console.log("mongodb connected");
}, (err)=>{
    console.log(err);
})
const userScheme=new
mongoose.Schema({
    userName:{type:String},age:{type:Number},email:{type:String},password:{type:String}
})
const user = mongoose.model("user", userScheme)
// app.get("/vv",(req,res)=>{
//     const user=new User({
//         userName:"omar",
//         age:22,
//         email:"omar@gmail.com",
//         password:"omar123"
//     })
// }).save()