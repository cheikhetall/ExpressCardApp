const mongoose=require('mongoose')

const imageSchema=new mongoose.Schema({
    email:String,
 profileImage:String,
})
const profileImage=mongoose.model('profileImage',imageSchema)

module.exports=profileImage