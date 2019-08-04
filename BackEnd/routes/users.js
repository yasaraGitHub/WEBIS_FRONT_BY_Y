//This file contains all the routes relevant for users

const express=require('express');
const router=express.Router();

const User=require('../models/user');

//route>>>localhost:3000/user/register
router.post("/register",function(req,res){
//console.log(req.body);

const newUser=new User({
  username:req.body.username,
  name:req.body.name,
  email:req.body.email,
  password:req.body.password
});

User.saveUser(newUser,function(err,user){
  if(err) {res.json({state:false,msg:"data not inserted :("});}
  if(user) {res.json({state:true,msg:"data inserted :)"});}

});
});

//route>>localhost:3000/user/login
router.post("/login",function(req,res){
  const email=req.body.email;
  const password=req.body.password;

  User.findByEmail(email,function(err,user){
    if(err) throw err;
    if(!user) {res.json({state:false,msg:"user is unavailable :("});}
    if(user){
      User.checkPassword(password,user.password,function(err,match){
        if(err) throw err;
        if(match)
        //should store a token for matched user in the local storage...
        console.log("email,password combination worked");
      });
    }
  });
});


//route>>>localhost:3000/user/users
router.get("/",function(req,res){
res.send("Hello user");
});

//route>>>localhost:3000/user/users
router.get("/users",function(req,res){
res.send("Hello users");
});

module.exports=router;
