const jwt=require('jsonwebtoken')

exports.jwtAuth=(req,res,next)=>{
    const token=req.cookies.accessToken;
    console.log(token)
    try{
        const user=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.user=user;
        next()
    }catch(err){
        res.clearCookie('accessToken')
        return res.redirect('/login')
    }
}