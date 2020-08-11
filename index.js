require('dotenv').config();
const Port = process.env.PORT || 8000;
const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const isAuth = require('./Auth/auth-verify');
const cors =require('cors');
const dbuser = 'dheerudev';
const dbpassword = 'test123';
const DB_URI =`mongodb://${dbuser}:${dbpassword}@ds113046.mlab.com:13046/movie-db`;
const path = require('path');
const serveStatic = require('serve-static');

app.use(isAuth);
app.use(cors());
app.use(morgan(':method :url :response-time'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(helmet({
    frameguard :{
        action : 'deny'
    }
}))

mongoose.connect(process.env.MONGODB_URI ||DB_URI , {useNewUrlParser: true ,useUnifiedTopology: true}, (error)=>{
    try{
        console.log('DataBase Connected')
    }catch(error){
        throw new Error(error)
    }
});
  
app.use(express.static(__dirname + "build")); //
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", index.html)); // <- try "index.html"
});
app.use('/api', userRoutes);

app.listen(Port,()=>{
    console.log(`The port server is running at PORT :${ Port }`)
})