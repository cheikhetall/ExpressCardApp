const express=require('express')
const router=express.Router()
const jwtAuth=require('../middleware/jwtAuthorisation')
const Collection=require('../models/Collection')
function isLoggedIn(req,res,next){
    if(req.isAuthenticated())return next()
    res.redirect('/login')
  }
router.get('/',isLoggedIn,async (req,res)=>{
// const users=await Users.find()
// console.log(users)

console.log(req.user)
res.render('newcollection')
})

router.post('/',async(req,res)=>{
    
const userCollection=await new Collection({
    email:req.user.email,
    firstImage:req.body.collectionImageOne,
    comment:req.body.comment
})

userCollection.save().then(()=>console.log('saved'))
res.redirect('/indexone')
})
module.exports=router