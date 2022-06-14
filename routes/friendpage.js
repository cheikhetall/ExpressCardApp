const express=require('express')
const router=express.Router()
const Collection=require("../models/Collection")
const profpics=require('../models/profpics')
function isLoggedIn(req,res,next){
    if(req.isAuthenticated())return next()
    res.redirect('/login')
  }

router.get('/',isLoggedIn,async(req,res)=>{

    res.render('frienpage')
})

module.exports=router