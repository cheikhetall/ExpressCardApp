const mongoose=require('mongoose')



const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,
        lowercase:true,
    },
    password:String
})
const Users=mongoose.model('Users',userSchema)

module.exports=Users