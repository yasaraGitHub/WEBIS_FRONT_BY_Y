const express=require('express');
const app = express();
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const passport=require('passport');
const cors=require('cors');

const user=require('./routes/users');
const config=require('./config/database');

const port=3000;

//mongoose connection
const connection=mongoose.connect(config.database);
if(connection) console.log("database connected");
else console.log("database not connected");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

//from this code segment nodejs identifies that front end is inside the "public" folder
app.use(express.static(path.join(__dirname,"public")));

//if route>>>localhost:3000/user ,then refer user(path:routes/users)
app.use('/user',user);

//route>>>localhost:3000/
app.get("/",function(req,res){
res.send("Hello world");
});

//creating the server
app.listen(port,function(){
  console.log("Listening to port "+port);
});
