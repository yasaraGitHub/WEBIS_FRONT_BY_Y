const mongoose=require('mongoose');
const schema=mongoose.Schema;
const bcrypt=require('bcryptjs');

//creating schema for the user in registration process
const userSchema= new schema({
  username:{type:String,required:true},
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
});



const User=module.exports=mongoose.model("User",userSchema);

//fuction to save user after encrypting(hash) password
module.exports.saveUser=function(newUser,callback){

  bcrypt.genSalt(10,(err,salt)=>{
     bcrypt.hash(newUser.password,salt,(err,hash)=>{
         if(err) throw err;
         newUser.password=hash;
         newUser.save(callback);
     });
 });

};

module.exports.findByEmail=function(email,callback){
  const query={email:email};
  User.findOne(query,callback);
};

module.exports.checkPassword=function(plainPassword,hash,callback){

 bcrypt.compare(plainPassword,hash,function(err,res){
   if(err) throw err;
   if(res){
     callback(null,res);
   }
 });

};
