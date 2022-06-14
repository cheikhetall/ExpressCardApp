const express=require('express')
const router=express.Router()
const jwtAuth=require('../middleware/jwtAuthorisation')
const Collection=require("../models/Collection")
const profpics=require('../models/profpics')
function isLoggedIn(req,res,next){
    if(req.isAuthenticated())return next()
    res.redirect('/login')
  }
// ,jwtAuth.jwtAuth    jwtAuth.jwtAuth
router.get('/',isLoggedIn,async(req,res)=>{
    const collection=await (Collection.find({email:req.user.email}))
    // console.log(collection)
    // console.log(req.user)
// console.log(req.user)
   
   const changedArray= await profpics.find({email:req.user.email})
    // console.log(req.body.profileImage)
    res.render('indexone',{collection,changedArray})

    })

 

router.post('/',isLoggedIn,async(req,res)=>{

    const profileArray=await profpics.find({email:req.user.email})
   
    // console.log(id)

    if((profileArray.length==0)){
        let profImage=await new profpics({
            email:req.user.email,
            profileImage:req.body.profileImageUrl
        })
    profImage.save(()=>console.log('saved'))
    
}else{


await profpics.findByIdAndUpdate(profileArray[0]._id,{profileImage:req.body.profileImageUrl})
// const newesturl=
    console.log()
// console.log(newesturl,oldUrl)
     
}

res.redirect('indexone')
    })


    router.post('/:id',async(req,res)=>{
const {id}=req.params;
console.log(id)
await Collection.findByIdAndDelete({_id:id})
res.redirect('/indexone')
    })

    // router.delete('/',jwtAuth.jwtAuth,async(req,res)=>{
    //     const profileArray=await Collection.find()
    //     console.log(profileArray.findById())
    //     res.redirect('indexone')
    // })



    module.exports=router