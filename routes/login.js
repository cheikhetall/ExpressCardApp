if(process.env.NODE.ENV!=='production'){
 require('dotenv').config()   
}


const express=require('express')
const router=express.Router()
const Users=require('../models/Users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const flash=require('express-flash')
const session=require('express-session')
const mongoose=require('mongoose')
const passport = require('passport')
const LocalStrategy=require('passport-local').Strategy

// router.use(flash())
// router.use(session({
//     secret:process.env.ACCESS_TOKEN_SECRET,
//     resave:false,
//     saveUninitialized:true
// }))

// router.use(passport.initialize())
// router.use(passport.session())
// // let initializePassport = require("../middleware/passport-config")
// //                                                                    
// // initializePassport(passport,async email=>{
   
// //     let user=await Users.findOne(user=>{  user.email===email}).clone()
// // return  user
// // })
// passport.serializeUser((user,done)=>{
//     done(null,user.id)
//   })
//   passport.deserializeUser((id,done)=>{
//     Users.findById(id,function(err,user){
//         done(err,user)
//     })
// })
// passport.use(new LocalStrategy(function(email,password,done){
//     Users.findOne({email:email},function(err,user){
//         if(err){
//             return done(err)
//         }
//         if(!user){
//             return done(null,false,{message:"Incorrect username"})
//         }
//           bcrypt.compare(password,user.password,function (err,res) {
//                  if(err) return done(err)
//                  if(res === false){
//                      return done(null,false,{message:'incorrect password'})
//                  }
//                  return done(null,user)
//              })
//             })
//   }))


// router.get('/',(req,res)=>{
//     res.render('login')
// })

// 



// router.post('/',passport.authenticate('local',{
//     successRedirect:'/',
//     failureRedirect:'/login',
//     failureFlash:true
// }))


// router.post('/',async (req,res)=>{
//  let counter=undefined;
//         const user=await  Users.find({email:req.body.email})
         
//     if(user[0]==null){
//         counter=true
//         return res.redirect("/login")
//         // res.status(400).send('Cannot find user',counter)
//     }
//     let accessuser=JSON.stringify(user[0])
 
 
//       const accessToken= jwt.sign(accessuser,process.env.ACCESS_TOKEN_SECRET);
//       console.log(accessToken)
//     try{
//     if(await bcrypt.compare(req.body.password,user[0].password)){
     
//      res.cookie("accessToken",accessToken,{
//          httpOnly:true,
//      })
 
// res.redirect("/addCollection")
//     }else{
//         counter=true
//         res.send('not allowed')
//     }
//     }catch{
//         counter=true
// res.send('not allowed')
//     }
//     console.log(counter)
// })







// const authentification=authentificateToken

// initializePassport(
//     passport,
//     email=>Users.find(user=>user.email===email)
// )

// router.post('/',passport.authenticate('local',{
//     successRedirect:'/',
//     failureRedirect:'/login',
//     failureFlash:true
// }),async (req,res)=>{

// })
module.exports=router
// module.exports=authentification