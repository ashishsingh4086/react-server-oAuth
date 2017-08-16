const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');

const keys = require("../config/key");

const User= mongoose.model('users');

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
   User.findById(id)
   .then(user=>{
    done(null , user);
   });

});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    }, 
    (accessToken, refreshToken, profile, done) =>{
       User.findOne({googleId:profile.id}) //checks if the id already exists
          .then((existingUser)=>{
            if(existingUser){
             done(null, existingUser);//we already have a record with the given profile ID
            }
            else{
               new User({ // if the id doesnt exist save the data 
        googleId:profile.id}).save()
        .then(user=> done(null,user));    //make a new record
            }
          })
   
    
  
    }
  )
);
