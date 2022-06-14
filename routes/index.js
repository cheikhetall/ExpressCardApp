var express = require('express');
var router = express.Router();
// const jwtAuth=require('../middleware/jwtAuthorisation')
// const passport = require("passport")
// /* GET home page. */
function isLoggedIn(req,res,next){
  if(req.isAuthenticated())return next()
  res.redirect('/login')
}
router.get('/',isLoggedIn ,(req, res, next) =>{
  
  res.render('index');
});

module.exports = router;
