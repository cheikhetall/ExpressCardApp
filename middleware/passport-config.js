

//  const passport = require("passport");
// const mongoose=require('mongoose')

// const LocalStrategy=require('passport-local').Strategy
// const bcrypt=require('bcrypt');
// const Users = require("../models/Users");


// function initialize(passport,getUserByEmail){

// const authenticateUser=async(email,password,done)=>{
    
   
//  const user =getUserByEmail(email)
//     if(user== null){
//         return done(null,false,{message:"No user with the email"})
//     }
//     try{
//         // console.log(password)
//         const users=await user
//         // console.log(users)
//         let userPass=users[0].password
//         if(await bcrypt.compare(password,userPass)){
         
//         //  res.cookie("accessToken",accessToken,{
//         //      httpOnly:true,
//         //  })
     
//     return done(null,false,{message:'email incorrect'})
// //         }else{
// //            return done(null,false,{message:"Password incorrect"})
// //         }
// //         }catch(e){
            
// //     return done(e)
// //         }
// //         }
    
//     passport.serializeUser((user,done)=>{
//         done(null,user.id)
//     })
//     passport.deserializeUser((id,done)=>{
//         Users.findById(id,function(err,user){
//             done(err,user)
//         })
//     })
//     passport.use(new LocalStrategy(function(email,password,done){
//         Users.findOne({email:email},function(err,user){
//             if(err){
//                 return done(err)
//             }
//             if(!user){
//                 return done(null,false,{message:"Incorrect username"})
//             }
//               bcrypt.compare(password,user.password,function (err,res) {
//                      if(err) return done(err)
//                      if(res === false){
//                          return done(null,false,{message:'incorrect password'})
//                      }
//                      return done(null,user)
//                  })
//         })
//     }
    
  
//    ))

// }

// try{
// if(await bcrypt.compare(password,user.password)){
//     return done(null,user)
// }else{
//     return done(null,false,{message:'No user with that email'})
// }
// }catch(e){
// return done(e)
// }

// passport.use(new localStrategy({usernameField:'email'},authenticateUser))
// passport.serializeUser((user,done)=>{ })
// passport.deserialiseUser((id,done)=>{ })
// }

// 