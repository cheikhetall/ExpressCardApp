const mongoose=require('mongoose')



const collectionSchema=new mongoose.Schema({
    email:String,
 firstImage:String,
 comment:String
})
const Collection=mongoose.model('Collection',collectionSchema)

module.exports=Collection