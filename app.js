const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bcrypt=require('bcrypt')

const hbs=require('handlebars')
const fpageRouter=require('./routes/friendpage')
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter=require('./routes/login')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');
const passport=require('passport')
const logoutRouter=require('./routes/logout')
const Users=require('./models/Users')
require('dotenv').config()
const flash=require('express-flash')
const newCollection=require('./routes/newcollection')
const indexOneRouter=require('./routes/indexone');
const LocalStrategy=require('passport-local').Strategy
// const initializePassport = require("./middleware/passport-config")
const app = express()

const session=require('express-session')
mongoose.connect(process.env.DB_URI,{
  dbName:process.env.DB_NAME,
  user:process.env.DB_USER,
  pass:process.env.DB_PASS,
  useNewURLParser:true,
  useUnifiedTopology: true
})
.then(res=>console.log('connected'))
.catch(err=>console.log(err))


app.set('views', path.join(__dirname, 'views'));
// app.engine('hbs',hbs({extname:'.hbs'}))
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));


app.use(cookieParser());
app.use(session({
  secret:process.env.ACCESS_TOKEN_SECRET,
  resave:true,
  saveUnitialized:true,
}))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// initializePassport(passport,email=>{
// return Users.find(user=>user.email===email)
// })


app.use(passport.initialize());
app.use(passport.session())
app.use(flash())

passport.serializeUser((user,done)=>{
  done(null,user.id)
})
passport.deserializeUser((id,done)=>{
  Users.findById(id,function(err,user){
      done(err,user)
  })
})

// function isLoggedIn(req,res,next){
//   if(req.isAuthenticated())return next()
//   res.redirect('/login')
// }




app.get('/login',(req,res)=>{
  res.render('login')
})
passport.use(new LocalStrategy ({ 
  usernameField: 'email',
  passwordField: 'password'
}, function authenticateUser(email,password,done){
  
  Users.findOne({email:email},function(err,user){
      if(err){
          return done(err)
      }
      if(!user){
          return done(null,false,{message:"Incorrect email"})
      }
      
        bcrypt.compare(password,user.password,function (err,res) {
               if(err) return done(err)
               if(res === false){
                   return done(null,false,{message:'incorrect password'})
               }
               return done(null,user)
           })
          })
}
))




app.post('/login',passport.authenticate('local',{
    successRedirect:'/indexone',
    failureRedirect:'/login',
    failureFlash:true
}))

// require('./middleware/passport-config')(passport);








// app.use(passport.session());



app.use('/addCollection',newCollection)
// app.use('/login',loginRouter)
app.use('/', indexRouter);
app.use('/logout',logoutRouter)
app.use('/newpage',fpageRouter)
app.use('/register', registerRouter);
app.use('/indexone',indexOneRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});





// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
